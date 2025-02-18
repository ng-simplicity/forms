import { Observable } from 'rxjs';
import { NgsFormsFormItemConfigBase } from '../item-config-bases';

export interface NgsFormsFormItem {
  type: string;
  config: NgsFormsFormItemConfigBase;
  visible?: boolean;
  visible$?: Observable<boolean>;
  items?: NgsFormsFormItem[];
}
