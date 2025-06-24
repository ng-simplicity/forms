import {Component, Injector} from "@angular/core";
import { NgsFormsBaseClassFormComponent } from '../../../internal';
import { NgsFormItemTextContentConfig } from './text-content-config.model';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'ngs-form-component-text-content',
  imports: [NgSwitchCase, NgSwitch],
  templateUrl: './text-content.component.html',
})
export class NgsFormsTextContentComponent extends NgsFormsBaseClassFormComponent {
  contentConfig = this.config as NgsFormItemTextContentConfig;
  constructor(injector: Injector) {
    super(injector);
  }
  
  static create(params: NgsFormsFormItem<NgsFormItemTextContentConfig>): NgsFormsFormItem<NgsFormItemTextContentConfig> {
    return params;
  }
}
