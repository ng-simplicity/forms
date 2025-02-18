import {Directive, Injector, OnInit} from "@angular/core";
import { NgsFormsBaseClassFormInputComponent, NgsFormsFormInputOption, NgsFormsFormItemConfigBaseInputWithOptions } from '../../internal';

@Directive()
export class NgsFormsBaseClassFormItemInputWithOptionsComponent extends NgsFormsBaseClassFormInputComponent implements OnInit {
  options: Array<NgsFormsFormInputOption> = [];
  itemWithOptionsConfig = this.config as NgsFormsFormItemConfigBaseInputWithOptions;
  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.setOptions();
  }

  private setOptions() {
    if (this.itemWithOptionsConfig.options) {
      this.options = this.itemWithOptionsConfig.options!;
    }
    if (this.itemWithOptionsConfig.options$) {
      this.subscribe(
        this.itemWithOptionsConfig.options$,
        options => this.options = options
      );
    }
  }
}
