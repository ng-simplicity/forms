import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgsFormsComponentRegistryService, NgsFormsCoreModule } from '@ng-simplicity/forms-core';
import {
  NgsFormsBootstrapFormItemInputComponent,
  NgsFormsBootstrapFormItemSelectInputComponent,
  NgsFormsBootstrapFormsItemCheckboxComponent,
  NgsFormsBootstrapFormsItemErrorComponent, NgsFormsBootstrapFormsItemTextAreaComponent,
  NgsFormsBootstrapRadioInputComponent
} from './form-components';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgsFormsCoreModule],
})
export class NgsFormsBootstrapModule {
  static registerAllBootStrapComponents(registryService: NgsFormsComponentRegistryService) {
    NgsFormsCoreModule.registerCoreNgsFormComponents(registryService);
    registryService.register('checkbox', NgsFormsBootstrapFormsItemCheckboxComponent);
    registryService.register('error', NgsFormsBootstrapFormsItemErrorComponent);
    registryService.register('text-input', NgsFormsBootstrapFormItemInputComponent);
    registryService.register('radio', NgsFormsBootstrapRadioInputComponent);
    registryService.register('select', NgsFormsBootstrapFormItemSelectInputComponent);
    registryService.register('text-area', NgsFormsBootstrapFormsItemTextAreaComponent);
  }
}
