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
  constructor(injector: Injector, private readonly santizer: Sanitizer) {
    super(injector);
    this.html = this.santizer.sanitize(SecurityContext.HTML, this.contentConfig.html) || '';
  }
}
