import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MessageService } from 'primeng/api';

import { DateRangeValidator } from '../../validators/date.validator';
import { LettersValidator } from '../../validators/letters.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public relationshipStatus = [
    { status: 'Single' },
    { status: 'Coupled' },
    { status: 'Married' },
    { status: 'Discoverd' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private readonly messageService: MessageService
  ) {}

  public addInformationForm: FormGroup = this.formBuilder.group({
    name: ['', [LettersValidator]],
    height: ['', [Validators.required]],
    relationShipStatus: ['', [Validators.required]],
    availableDay: ['', [Validators.required]],
  });

  get controlName(): AbstractControl {
    return this.addInformationForm.get('name') as AbstractControl;
  }

  get controlHeight(): AbstractControl {
    return this.addInformationForm.get('height') as AbstractControl;
  }

  get controlRelationShipStatus(): AbstractControl {
    return this.addInformationForm.get('relationShipStatus') as AbstractControl;
  }

  get controlAvailableDay(): AbstractControl {
    return this.addInformationForm.get('availableDay') as AbstractControl;
  }

  public minDateValue: Date = new Date();
  public maxDateValue: Date = new Date();

  ngOnInit(): void {
    this.maxDateValue.setDate(this.minDateValue.getDate() + 5);

    this.controlAvailableDay.setValidators([
      DateRangeValidator(this.minDateValue, this.maxDateValue),
      Validators.required,
    ]);
  }

  public addInformation(): void {
    console.log(this.addInformationForm.value);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Your information has been registered`,
    });
  }
}
