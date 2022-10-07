import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formError',
})
export class FormErrorPipe implements PipeTransform {
  public transform(
    errors: ValidationErrors | null,
    errorType?: 'letter' | 'next-five-day'
  ): string {
    const keys: string[] = Object.keys(errors as ValidationErrors);
    if (keys.length === 0) return '';

    const key: string = keys[0];
    switch (key) {
      case 'required':
        return 'This field is required';
      case 'letter':
        return 'This field can only contain letters';
      case 'dateRange':
        return 'Only the next five days can be selected';
      default:
        return '';
    }
  }
}
