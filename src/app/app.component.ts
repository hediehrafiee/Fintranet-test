import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import { StepsComponentEnum } from './enums/steps-component.enum';
import { TeacherRs } from './interfaces/teachers.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-fintranet';

  public items: { label: string }[] = [
    {
      label: 'Upload Image',
    },
    {
      label: 'Form',
    },
    {
      label: 'Payment',
    },
    {
      label: 'Confirmation',
    },
  ];

  public activeIndex: number = 0;
  public stepsComponentEnum: typeof StepsComponentEnum = StepsComponentEnum;

  public changeStep(index: number): void {
    this.activeIndex = index;
  }

  public onChooseTeacher(teachers: TeacherRs[]): void {
    this.activeIndex = this.activeIndex + 1;
  }
}
