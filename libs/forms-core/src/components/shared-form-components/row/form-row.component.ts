import {
  AfterViewInit,
  Component,
  Injector,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { isArray } from 'lodash';
import {
  NGS_FORMS_FORM_GROUP,
  NgsFormsBaseClassItemsContainerBase,
  NgsFormItemController,
  NgsFormItemRowConfig, NgsFormsFormItem
} from '../../../internal';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ngs-forms-row-component',
  imports: [NgForOf],
  templateUrl: './form-row.component.html',
})
export class NgsFormsRowComponent
  extends NgsFormsBaseClassItemsContainerBase
  implements AfterViewInit
{
  private rowConfig: NgsFormItemRowConfig = this.config as NgsFormItemRowConfig;
  private readonly formGroup =
    this.injector.get<UntypedFormGroup>(NGS_FORMS_FORM_GROUP);
  readonly containerClass: string = '';
  readonly columnClasses: Array<string> = [];
  @ViewChildren('container', { read: ViewContainerRef })
  viewChildrenViewContainerRefs: Array<ViewContainerRef> = [];

  constructor(injector: Injector) {
    super(injector);
    if (!this.mayContinue()) return;
    this.columnClasses = isArray(this.rowConfig.columnClasses)
      ? (this.rowConfig.columnClasses as Array<string>)
      : this.items!.map(() => this.rowConfig.columnClasses as string);
    this.containerClass = this.rowConfig.containerClass || 'row';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.mayContinue()) return;
      const viewContainerRefs = this.viewChildrenViewContainerRefs.map(
        (vcr) => vcr
      );
      for (let i = 0; i < this.columnClasses.length; i++) {
        const child = this.items![i];
        const viewContainerRef = viewContainerRefs[i];
        if (!child || !viewContainerRef) break;
        this.controllers.push(
          new NgsFormItemController(this.injector, child, this.formGroup, {
            viewContainerRef,
          })
        );
      }
    }, 1);
  }

  private mayContinue() {
    if (!this.items || !this.items.length) {
      console.error('ng simplicity form row requires 1 or more child items.');
      return false;
    }
    return true;
  }

  static create(params: NgsFormsFormItem<NgsFormItemRowConfig>): NgsFormsFormItem<NgsFormItemRowConfig> {
    return params;
  }
}
