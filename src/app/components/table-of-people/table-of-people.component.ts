import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MessageService } from 'primeng/api';

import { TeachersService } from '../../services/teachers.service';
import { StepsService } from '../../services/steps.service';

import { TeacherRs } from '../../interfaces/teachers.interface';

@Component({
  selector: 'app-table-of-people',
  templateUrl: './table-of-people.component.html',
  styleUrls: ['./table-of-people.component.scss'],
})
export class TableOfPeopleComponent implements OnInit {
  @Output() public onChooseTeacher: EventEmitter<TeacherRs[]> =
    new EventEmitter<TeacherRs[]>();

  public teachers: TeacherRs[];
  public selectedTeacher: TeacherRs[];
  public loading: boolean = true;

  constructor(
    private readonly teachersService: TeachersService,
    private readonly messageService: MessageService,

    private stepsService: StepsService
  ) {}

  ngOnInit(): void {
    this.teachersService.getTeachers().subscribe((teachers) => {
      this.teachers = teachers;
      this.loading = false;

      this.teachers.forEach(
        (customer: any) => (customer.date = new Date(customer.date))
      );
    });
  }

  public selectTeacher(): void {
    const chooses: TeacherRs =
      this.selectedTeacher[this.selectedTeacher.length - 1];
    this.selectedTeacher.length = 0;

    this.selectedTeacher.push(chooses);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `${chooses.name} has been selected`,
    });

    this.stepsService.summaryData.teacher = chooses;
    this.stepsService.setSummaryData(this.stepsService.summaryData);

    setTimeout(() => {
      this.onChooseTeacher.emit(this.selectedTeacher);
    }, 2000);
  }
}
