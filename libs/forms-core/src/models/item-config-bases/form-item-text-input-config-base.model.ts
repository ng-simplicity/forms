import { NgsFormsFormItemConfigBaseItemWithNameAndValidators } from '../../internal';

export interface NgsFormsFormItemConfigBaseTextInput extends NgsFormsFormItemConfigBaseItemWithNameAndValidators {
  placeholder?: string;
  type?: 'text' | 'email' | 'password'
}
