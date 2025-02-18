import {NgsFormsFormItemConfigBase} from "../../../internal";

export interface NgsFormItemTextContentConfig extends NgsFormsFormItemConfigBase{
  tag: 'h1' | 'div' | 'p' | 'h2' | 'h3' |'h4';
  tagClasses?: string;
  text: string;
}
