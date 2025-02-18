import { NgsFormsFormItemConfigBase } from '../../../models';

export interface NgsFormItemHtmlContentConfig extends NgsFormsFormItemConfigBase{
  html: string;
  sanitize: boolean;
}
