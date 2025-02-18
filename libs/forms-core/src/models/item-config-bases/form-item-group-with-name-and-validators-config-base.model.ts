import {  NgsFormsFormItemConfigBase } from './form-item-config-base.model';
import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgsFormsFormErrorKeyValueMap } from '../errors';

export interface NgsFormsFormItemConfigBaseItemWithNameAndValidators extends NgsFormsFormItemConfigBase{
  name: string;
  errorMessageMap?: NgsFormsFormErrorKeyValueMap;
  disabled?: boolean;
  disabled$?: Observable<boolean>;
  validators?: Array<ValidatorFn>;
  validators$? :Observable<Array<ValidatorFn>>;
}
