import {
  HttpEventType,
  HttpErrorResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { Component } from '@angular/core';

import { MessageService } from 'primeng/api';

import { map, catchError, of } from 'rxjs';
import { UploadFilesService } from './../../services/upload-files.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [MessageService],
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
    private readonly messageService: MessageService
  ) {}

  public preview(event: Event): void {
    this.file = ((event.target as HTMLInputElement).files as FileList)[0];

    let fileSize: number = this.file.size;
    if (fileSize > this.maxImageSize) {
      this.messageService.add({
        severity: 'warn',

        detail: 'Max image size is 5MB',
      });
      this.file = null;
      return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.imgSrc = reader.result as string;
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

              return event;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.inProgress = false;
          return of(`Upload failed.`);
        })
      )
      .subscribe((event) => {
        if (event) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Image uploaded successfully',
          });
        }
      });
  }
}
