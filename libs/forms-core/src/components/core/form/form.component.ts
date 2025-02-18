import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import {
  NgsFormsComponentRegistryService,
  NgsFormsFormItem,
  NgsFormsService,
  NgsFormsInternalService,
  NgsSubscriber,
  NgsFormItemController
} from '../../../internal';
import { FormGroup, UntypedFormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'ngs-form',
  template: '',
  providers: [NgsFormsInternalService],
})
export class NgsFormComponent
  extends NgsSubscriber
  implements OnInit, OnDestroy
{
  private readonly formGroup: BehaviorSubject<UntypedFormGroup>;
  private controller: NgsFormItemController | undefined;

  constructor(
    private readonly injector: Injector,
    private readonly ngsInternalFormsService: NgsFormsInternalService,
    private readonly ngsFormComponentRegistryService: NgsFormsComponentRegistryService,
    private readonly ngsFormsService: NgsFormsService
  ) {
    super();
    this.formGroup = this.ngsInternalFormsService.formGroup$;
  }

  ngOnInit() {
    this.ngsFormsService.setInternalService(this.ngsInternalFormsService);
    this.bindVariables();
  }

  bindVariables() {
    this.subscribe(
      combineLatest([
        this.ngsInternalFormsService.formGroup$,
        this.ngsInternalFormsService.formConfig$.pipe(map((e) => e?.rootItem)),
      ]),
      ([formGroup, itemData]) => {
        this.updateRootFormItem(formGroup, itemData);
      }
    );
  }

  updateRootFormItem(formGroup: FormGroup, itemData?: NgsFormsFormItem) {
    if (this.controller) this.controller.destroy();
    if (!itemData || !formGroup) return;
    this.controller = new NgsFormItemController(
      this.injector,
      itemData,
      formGroup
    );
  }
}
