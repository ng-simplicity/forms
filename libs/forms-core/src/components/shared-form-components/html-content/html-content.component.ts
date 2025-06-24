import {
  Component,
  Injector,
  Sanitizer,
  SecurityContext,
} from '@angular/core';
import { NgsFormsBaseClassFormComponent } from '../../../internal';
import { NgsFormItemHtmlContentConfig } from './html-content-config.model';

@Component({
  selector: 'ngs-form-component-html-content',
  imports: [],
  templateUrl: './html-content.component.html',
})
export class NgsFormsHtmlContentComponent extends NgsFormsBaseClassFormComponent
{
  contentConfig = this.config as NgsFormItemHtmlContentConfig;
  html: string;
  constructor(injector: Injector, private readonly sanitizer: Sanitizer) {
    super(injector);
    this.html = this.sanitizer.sanitize(SecurityContext.HTML, this.contentConfig.html) || '';
  }
  
  static create(params: NgsFormsFormItem<NgsFormItemHtmlContentConfig>): NgsFormsFormItem<NgsFormItemHtmlContentConfig> {
    return params;
  }
}
