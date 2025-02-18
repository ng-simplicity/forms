import {NgsFormsFormItemConfigBase} from "../../../internal";

export interface NgsFormItemRowConfig extends NgsFormsFormItemConfigBase{
  containerClass: string;
  columnClasses: Array<string> | string;
}
