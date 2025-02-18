import { UntypedFormGroup } from '@angular/forms';
import { NgsFormItemControllerOptions } from './form-item-controller-options.interface';
import { ComponentRef, Injector, ViewContainerRef } from '@angular/core';
import {
  NgsFormsFormItem,
  NgsSubscriber,
  NGS_FORMS_FORM_GROUP,
  NGS_FORMS_ITEM_CONFIG,
  NGS_FORMS_ITEM_DATA,
  NGS_PARENT_VISIBILITY,
  NgsFormsComponentRegistryService
} from '../../internal';
import { BehaviorSubject } from 'rxjs';

export class NgsFormItemController extends NgsSubscriber {
  private viewContainerRef: ViewContainerRef | undefined;
  private componentRef: ComponentRef<unknown> | undefined;
  private parentVisibility = new BehaviorSubject<boolean>(false);
  private lastVisible: boolean | undefined;
  private readonly formComponentRegistryService: NgsFormsComponentRegistryService;

  constructor(
    private readonly injector: Injector,
    private readonly itemData: NgsFormsFormItem,
    private readonly formGroup: UntypedFormGroup,
    private readonly options: NgsFormItemControllerOptions = {}
  ) {
    super();
    this.bindVisibility();
    this.viewContainerRef = this.injector.get<ViewContainerRef>(ViewContainerRef);
    this.formComponentRegistryService = this.injector.get<NgsFormsComponentRegistryService>(NgsFormsComponentRegistryService);
  }

  private bindVisibility() {
    if (!this.itemData.visible$) {
      this.create();
      return;
    }
    this.subscribe(this.itemData.visible$,
      visible => {
        if (this.lastVisible === visible) return;
        this.parentVisibility.next(visible);
        this.lastVisible = visible;
        if (visible) {
          this.create();
          return;
        }
        this.detach();
      }
    );
  }

  private create() {
    const myInjector = Injector.create({
      parent: this.injector, providers: [
        { provide: NGS_FORMS_ITEM_DATA, useValue: this.itemData },
        { provide: NGS_FORMS_ITEM_CONFIG, useValue: this.itemData.config },
        { provide: NGS_FORMS_FORM_GROUP, useValue: this.formGroup },
        { provide: NGS_PARENT_VISIBILITY, useValue: this.parentVisibility }
      ]
    });
    this.viewContainerRef = this.options.viewContainerRef || this.viewContainerRef;
    const componentType = this.formComponentRegistryService.getComponentTypeForKey(this.itemData.type)
    if (!componentType) {
      console.error(`Ngs form component type ${this.itemData.type} not registered.`)
      return;
    }
    this.componentRef = this.viewContainerRef!.createComponent(componentType, { injector: myInjector });
    this.parentVisibility.next(true)
  }

  private detach() {
    this.parentVisibility.next(false);
    this.componentRef?.destroy()
  }

  destroy() {
    this.detach();
    super.ngOnDestroy();
  }
}
