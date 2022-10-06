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

  public items: any;

  public activeIndex: number = 2;
  public stepsComponentEnum: typeof StepsComponentEnum = StepsComponentEnum;

  constructor() {}

  ngOnInit() {
    this.items = [
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
  }

  public changeStep(index: number): void {
    this.activeIndex = index;
  }

  public onChooseTeacher(teachers: TeacherRs[]): void {
    this.activeIndex = this.activeIndex + 1;
  }
}
