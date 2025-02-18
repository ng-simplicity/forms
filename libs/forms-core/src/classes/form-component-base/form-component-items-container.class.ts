import { NgsFormsFormItem } from '../../models';

import { NgsFormsBaseClassFormComponent } from './form-component.class';
import { Directive, Injector, OnDestroy } from '@angular/core';
import { NgsFormsComponentRegistryService } from '../../services';
import { NgsFormItemController } from '../../controllers';

@Directive({})  // no op for compiler
export class NgsFormsBaseClassItemsContainerBase extends NgsFormsBaseClassFormComponent implements OnDestroy {
  protected controllers: Array<NgsFormItemController> = [];
  protected readonly ngsFormComponentRegistry: NgsFormsComponentRegistryService;
  protected items: Array<NgsFormsFormItem> | undefined= this.itemData.items;

  constructor(injector: Injector) {
    super(injector);
    this.ngsFormComponentRegistry = this.injector.get(NgsFormsComponentRegistryService);
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
    this.controllers.forEach(c=>c.destroy());
  }
}
