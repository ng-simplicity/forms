import {Component, Injector} from "@angular/core";
import { NgsFormsBaseClassFormItemInputWithOptionsComponent, NgsFormsFormItem } from '@ng-simplicity/forms-core';
import { NgsFormsFormsItemConfigBoostrapRadio } from './radio.config';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngs-forms-bootstrap-radio-group-input',
  imports: [ReactiveFormsModule],
  templateUrl: './radio.component.html',
})
export class NgsFormsBootstrapRadioInputComponent extends NgsFormsBaseClassFormItemInputWithOptionsComponent {
  radioConfig = this.config as NgsFormsFormsItemConfigBoostrapRadio;
  constructor(injector: Injector) {
    super(injector);
  }

  static create(params: NgsFormsFormItem<NgsFormsFormsItemConfigBoostrapRadio>): NgsFormsFormItem<NgsFormsFormsItemConfigBoostrapRadio> {
    return params;
  }
}
