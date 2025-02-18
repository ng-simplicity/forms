import {Component, Injector} from "@angular/core";
import { NgsFormsFormItemConfigBootstrapSelectInput } from './select.config';

import { NgsFormsBaseClassFormItemInputWithOptionsComponent } from '@ng-simplicity/forms-core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngs-forms-bootstrap-select-input',
  imports: [ReactiveFormsModule],
  templateUrl: './select.component.html',
})
export class NgsFormsBootstrapFormItemSelectInputComponent extends NgsFormsBaseClassFormItemInputWithOptionsComponent {
  selectConfig = this.config as NgsFormsFormItemConfigBootstrapSelectInput;
  constructor(injector: Injector) {
    super(injector);
  }
}
