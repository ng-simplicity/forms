import { Observable } from 'rxjs';
import { NgsFormsFormInputOption } from './form-item-option.model';
import { NgsFormsFormItemConfigBaseTextInput } from './form-item-text-input-config-base.model';

export interface NgsFormsFormItemConfigBaseInputWithOptions
  extends NgsFormsFormItemConfigBaseTextInput {
  options?: Array<NgsFormsFormInputOption>;
  options$?: Observable<Array<NgsFormsFormInputOption>>;
}
