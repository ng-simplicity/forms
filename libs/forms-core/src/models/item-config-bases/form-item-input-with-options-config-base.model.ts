import { Observable } from 'rxjs';
import { NgsFormsFormInputOption } from './form-item-option.model';
import { NgsFormsFormItemConfigBaseInput } from './form-item-input-config-base.model';

export interface NgsFormsFormItemConfigBaseInputWithOptions  extends NgsFormsFormItemConfigBaseInput {
  options?: Array<NgsFormsFormInputOption>;
  options$?: Observable<Array<NgsFormsFormInputOption>>;
}
