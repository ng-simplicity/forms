import {Component, Injector} from "@angular/core";
import {NgsFormsBaseClassFormInputComponent} from "@ng-simplicity/forms-core";
import { ReactiveFormsModule } from '@angular/forms';
import {defaults} from 'lodash';
import { NgsFormBootstrapInputComponentResources } from './input-component.resources';
import { NgsFormsFormItemConfigBootstrapTextInput } from './input.config';


@Component({
  selector: 'ngs-forms-bs-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class NgsFormsBootstrapFormItemInputComponent extends NgsFormsBaseClassFormInputComponent {
  textConfig: NgsFormsFormItemConfigBootstrapTextInput = defaults(this.config as NgsFormsFormItemConfigBootstrapTextInput, NgsFormBootstrapInputComponentResources.defaults);
  constructor(injector: Injector) {
    super(injector);
  }
}
