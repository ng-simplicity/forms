import {Component, Injector} from "@angular/core";
import { NgsFormsBaseClassFormInputComponent, NgsFormsFormItemConfigBaseInput, NgsFormsFormItem } from '@ng-simplicity/forms-core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'ngs-form-item-bs-checkbox',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
})
export class NgsFormsBootstrapFormsItemCheckboxComponent extends NgsFormsBaseClassFormInputComponent {
  checkboxConfig = this.config as NgsFormsFormItemConfigBaseInput
  constructor(injector: Injector) {
    super(injector);
  }
  
  static create(params: NgsFormsFormItem<NgsFormsFormItemConfigBaseInput>): NgsFormsFormItem<NgsFormsFormItemConfigBaseInput> {
    return params;
  }
}
