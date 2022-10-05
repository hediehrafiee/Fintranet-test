import { ValidatorFn } from '@angular/forms';

export const LettersValidator: ValidatorFn = (control) => {
  const regex = /^[a-zA-Z ]*$/;
  return regex.test(control.value) ? null : { letter: true };
};
