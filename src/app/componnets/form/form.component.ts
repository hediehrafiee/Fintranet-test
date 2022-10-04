import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  selectedCity1: any;

  value: any;

  demoUser: any;

  date2: Date;

  constructor(private formBuilder: FormBuilder) {}

  public addInformationForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    family: ['', Validators.required],
    age: ['', Validators.required],
    score: ['', Validators.required],
  });

  ngOnInit(): void {}

  parseDate(dateString: any): Date | null {
    if (dateString.target.value) {
      return new Date(dateString.target);
    }
    return null;
  }
}
