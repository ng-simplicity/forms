import { NgsFormsFormItemConfigBaseTextInput } from '@ng-simplicity/forms-core';

export interface NgsFormsFormItemConfigBootstrapTextArea extends NgsFormsFormItemConfigBaseTextInput{
  labelLocation?: 'left' | 'top'
  inputCssClass: string;
}
