import { Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgsFormsBaseClassFormInputComponent, NgsFormsFormItem } from '@ng-simplicity/forms-core';
import { NgsFormsFormItemConfigBootstrapTextArea } from './text-area.config';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngs-form-item-bs-text-area',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css',
})
export class NgsFormsBootstrapFormsItemTextAreaComponent extends NgsFormsBaseClassFormInputComponent {
  textAreaConfig = this.config as NgsFormsFormItemConfigBootstrapTextArea;
  constructor(injector: Injector) {
    super(injector);
  }

  static create(params: NgsFormsFormItem<NgsFormsFormItemConfigBootstrapTextArea>): NgsFormsFormItem<NgsFormsFormItemConfigBootstrapTextArea> {
    return params;
  }
}
