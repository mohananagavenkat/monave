import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

// validation function
const resumeValidator = (c: AbstractControl) => {
  if (c.value) {
    let fileExtension = c.value.split('.').pop();
    if (fileExtension == "pdf" || fileExtension == "docx" || fileExtension == "doc") {
      return null;
    }
    else {
      return {
        accept: {
          valid: false
        }
      };
    }
  }
}

@Directive({
  selector: '[resumevalidate]',
  providers: [
    { provide: NG_VALIDATORS, useValue: resumeValidator, multi: true }
  ]
})
export class ResumeValidator {
}
