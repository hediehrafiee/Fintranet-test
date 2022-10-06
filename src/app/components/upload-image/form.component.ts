import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) {}

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

  private today: Date = new Date();
  public minDateValue: Date = new Date();
  public maxDateValue: Date;

  ngOnInit(): void {
    this.minDateValue.setDate(this.today.getDate() + 1);
    this.maxDateValue.setDate(this.today.getDate() + 2);
  }

  parseDate(dateString: any): Date | null {
    if (dateString.target.value) {
      return new Date(dateString.target);
    }
    return null;
  }
}
