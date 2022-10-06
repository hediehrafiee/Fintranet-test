import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { UploadFileRs } from '../interfaces/upload-file.interface';

@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  SERVER_URL: string = 'https://file.io/';

  constructor(private http: HttpClient) {}
  public upload(formData: FormData): Observable<UploadFileRs> {
    return this.http
      .post(this.SERVER_URL, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(map((data: any) => data));
  }
}
