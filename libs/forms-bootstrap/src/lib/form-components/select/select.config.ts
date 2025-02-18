import { NgsFormsFormItemConfigBaseInput } from '@ng-simplicity/forms-core';


export interface NgsFormsFormItemConfigBootstrapSelectInput extends NgsFormsFormItemConfigBaseInput{
  labelLocation?: 'top' | 'left';
  placeholder?: boolean;
  placeHolderValue?: string;
}
