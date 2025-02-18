import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import {
  NGS_FORMS_FORM_GROUP,
  NGS_PARENT_VISIBILITY,
  NgsFormsBaseClassFormComponent,
  NgsFormItemController,
  NgsFormsFormItemConfigBaseItemWithNameAndValidators,
} from '../../../internal';
import { Observable } from 'rxjs';
@Component({
  selector: 'ngs-forms-form-group',
  template: ''
})
export class NgsFormsFormGroupComponent
  extends NgsFormsBaseClassFormComponent
  implements OnInit
{
  private readonly formGroup =
    this.injector.get<UntypedFormGroup>(NGS_FORMS_FORM_GROUP);
  private readonly visibilityObservable = this.injector.get<
    Observable<boolean>
  >(NGS_PARENT_VISIBILITY);
  private myFormGroup: UntypedFormGroup = new UntypedFormGroup({});
  private controller: NgsFormItemController | undefined;
  private isVisible: boolean | undefined;
  private formGroupConfig = this.config as NgsFormsFormItemConfigBaseItemWithNameAndValidators;

  ngOnInit() {
    this.bindVisible();
  }

  private bindVisible() {
    this.subscribe(
      this.visibilityObservable,
      (isVisible) => {
        if (this.isVisible === isVisible) return;
        this.isVisible = isVisible;
        if (isVisible) {
          if (!this.itemData.items || this.itemData.items.length !== 1) {
            console.error(
              "Ngs form group component only supports a single item.  Use 'column' or 'row' to add multiple."
            );
            return;
          }
          this.formGroup.addControl(this.formGroupConfig.name, this.formGroup);
          this.controller = new NgsFormItemController(
            this.injector,
            this.itemData.items[0],
            this.myFormGroup
          );
          return;
        }

        this.formGroup.removeControl(this.formGroupConfig.name);
        this.controller?.destroy();
      }
    );
  }
}
