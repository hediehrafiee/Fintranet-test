import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formError',
})
export class FormErrorPipe implements PipeTransform {
  public transform(
    errors: ValidationErrors,
    errorType?: 'number' | 'letters' | 'next-five-day'
  ): string {
    const keys: string[] = Object.keys(errors);
    if (keys.length === 0) return '';

    const key: string = keys[0];
    const value: any = errors[key];

    switch (key) {
      case 'required':
        switch (errorType) {
          case 'number':
            return '';
        }
        return '';

      default:
        return '';
    }
  }
}
