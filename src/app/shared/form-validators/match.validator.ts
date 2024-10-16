import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export function MatchValidator(source: string, target: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const sourceCtrl = control.get(source);
    const targetCtrl = control.get(target);

    return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
      ? { mismatch: true }
      : null;
  };
}
