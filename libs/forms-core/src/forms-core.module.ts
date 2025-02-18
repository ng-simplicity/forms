import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgsFormsColumnComponent, NgsFormsFormGroupComponent, NgsFormsComponentRegistryService, NgsFormsRowComponent, NgsFormsFormArrayComponent, NgsFormsTextContentComponent, NgsFormsHtmlContentComponent } from './internal';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class NgsFormsCoreModule {
  static registerCoreNgsFormComponents(registryService: NgsFormsComponentRegistryService){
    registryService.register('form-group', NgsFormsFormGroupComponent);
    registryService.register('row', NgsFormsRowComponent);
    registryService.register('column', NgsFormsColumnComponent);
    registryService.register('form-array', NgsFormsFormArrayComponent);
    registryService.register('content-text', NgsFormsTextContentComponent);
    registryService.register('content-html', NgsFormsHtmlContentComponent);
  }
}
