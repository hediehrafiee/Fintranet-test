import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function DateRangeValidator(start: Date, end: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    return control.value > end || control.value < start
      ? { dateRange: true }
      : null;
  };
}
