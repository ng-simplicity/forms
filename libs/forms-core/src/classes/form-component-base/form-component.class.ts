
import { Directive, Injector } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { NgsSubscriber, NGS_FORMS_ITEM_DATA, NgsFormsFormItem, NgsFormsFormItemConfigBase } from '../../internal';

@Directive({})
export class NgsFormsBaseClassFormComponent extends NgsSubscriber{
  id =  uuidv4();
  protected readonly config: NgsFormsFormItemConfigBase
  protected readonly itemData: NgsFormsFormItem;
  constructor(
    protected readonly injector: Injector
  ) {
    super();
    this.itemData = injector.get<NgsFormsFormItem>(NGS_FORMS_ITEM_DATA);
    this.config = this.itemData.config;
  }
}
