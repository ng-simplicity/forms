import { NgsFormsFormItemConfigBaseItemWithNameAndValidators } from '../../internal';

export interface NgsFormsFormItemConfigBaseTextInput extends NgsFormsFormItemConfigBaseItemWithNameAndValidators {
  label: string;
  placeholder?: string;
}
