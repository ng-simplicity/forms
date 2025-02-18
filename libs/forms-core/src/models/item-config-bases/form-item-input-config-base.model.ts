import { NgsFormsFormItemConfigBaseItemWithNameAndValidators } from '../../internal';

export interface NgsFormsFormItemConfigBaseInput extends NgsFormsFormItemConfigBaseItemWithNameAndValidators {
  id?: string;
  label: string;
  value?: unknown;
}
