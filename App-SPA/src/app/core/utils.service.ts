import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  atLeastOne = (validator: ValidatorFn, controls: string[] = null) => (group: FormGroup): ValidationErrors | null => {
    if (!controls) {
      controls = Object.keys(group.controls);
    }

    const hasAtLeastOne = group && group.controls && controls
      .some(k => !validator(group.controls[k]));

    return hasAtLeastOne ? null : {
      atLeastOne: true,
    };
  }
}
