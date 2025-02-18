import { NgsFormsFormItemConfigBaseTextInput } from '@ng-simplicity/forms-core';

export interface NgsFormsFormItemConfigBootstrapTextInput extends NgsFormsFormItemConfigBaseTextInput{
  type?: 'text' | 'email' | 'password'
  labelLocation?: 'left' | 'top'
}
