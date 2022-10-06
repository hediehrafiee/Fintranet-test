import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TeacherRs } from '../interfaces/teachers.interface';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor(private http: HttpClient) {}

  public getTeachers(): Observable<TeacherRs[]> {
    return this.http
      .get('assets/teachers.json')
      .pipe(map((data: any) => data.data));
  }
}
