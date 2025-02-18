import { NgsFormsFormItemConfigBootstrapTextInput } from './input.config';
export const NgsFormBootstrapInputComponentResources: INgsFormBoostrapInputComponentResources = {
  defaults:{
    type: 'text',
    labelLocation: 'top',
  }
}

export interface INgsFormBoostrapInputComponentResources {
  defaults: Partial<NgsFormsFormItemConfigBootstrapTextInput>;
}
