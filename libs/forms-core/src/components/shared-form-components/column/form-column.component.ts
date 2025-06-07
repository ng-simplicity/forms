import { UntypedFormGroup } from '@angular/forms';
import { NGS_FORMS_FORM_GROUP, NgsFormsBaseClassItemsContainerBase, NgsFormItemController, NgsFormsFormItemConfigBase, NgsFormsFormItem } from '../../../internal';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'ngs-form-component-column',
  template: ''
})
export class NgsFormsColumnComponent extends NgsFormsBaseClassItemsContainerBase implements OnInit {
  private readonly formGroup = this.injector.get<UntypedFormGroup>(NGS_FORMS_FORM_GROUP)
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {
    if(!this.mayContinue()) return
    this.controllers = this.items!.map(itemData => new NgsFormItemController(this.injector, itemData, this.formGroup));
  }
  private mayContinue(){
    if (!this.items || !this.items.length) {
      console.error("Ngs form column requires 1 or more child items")
      return  false
    }
    return  true;
  }
  static create(params: NgsFormsFormItem<NgsFormsFormItemConfigBase>): NgsFormsFormItem<NgsFormsFormItemConfigBase>{
    return params;
  }
}
