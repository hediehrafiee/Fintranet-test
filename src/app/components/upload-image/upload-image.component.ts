import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, catchError, of } from 'rxjs';

import { MessageService } from 'primeng/api';

import { StepsService } from '../../services/steps.service';
import { UploadFilesService } from './../../services/upload-files.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent {
  public inProgress: boolean = false;
  public progress: number = 0;

  public imgSrc: string = '';
  public file: File | null;
  private kiloByte: number = 1024;
  private maxImageSize: number = 5 * this.kiloByte * this.kiloByte;

  constructor(
    private readonly uploadFilesService: UploadFilesService,
    private readonly messageService: MessageService,

    private stepsService: StepsService
  ) {}

  public preview(event: Event): void {
    this.file = ((event.target as HTMLInputElement).files as FileList)[0];

    this.stepsService.summaryData.image = {
      name: this.file.name,
    };

    let fileSize: number = this.file.size;
    if (fileSize > this.maxImageSize) {
      this.messageService.add({
        severity: 'warn',

        detail: 'Max image size is 5MB',
      });
      this.stepsService.summaryData.image.status = 'WARN';
      this.stepsService.setSummaryData(this.stepsService.summaryData);
      this.file = null;
      return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.imgSrc = reader.result as string;

      if (this.stepsService.summaryData.image)
        this.stepsService.summaryData.image.src = this.imgSrc;

      this.stepsService.setSummaryData(this.stepsService.summaryData);
    };
  }

  public uploadImage(): void {
    let formData: FormData = new FormData();
    formData.append('file', this.file as File, (this.file as File).name);

    this.inProgress = true;
    this.progress = 0;

    this.uploadFilesService
      .upload(formData)
      .pipe(
        map((event: any) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              this.progress = Math.round((event.loaded * 100) / event.total);
              break;
            case HttpEventType.Response:
              this.inProgress = false;
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Image uploaded successfully',
              });

              if (this.stepsService.summaryData.image)
                this.stepsService.summaryData.image.status = 'SUCCESS';
              this.stepsService.setSummaryData(this.stepsService.summaryData);

              return event;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.inProgress = false;
          this.messageService.add({
            severity: 'err',
            summary: 'Error',
            detail: 'Upload failed',
          });

          if (this.stepsService.summaryData.image)
            this.stepsService.summaryData.image.status = 'FAILED';
          this.stepsService.setSummaryData(this.stepsService.summaryData);

          return of(`Upload failed.`);
        })
      )
      .subscribe((event) => {
        if (event) {
        }
      });
  }
}
