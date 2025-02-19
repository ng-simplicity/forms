import { NGS_FORMS_FORM_GROUP,  NGS_PARENT_VISIBILITY } from '../../misc';
import { NgsFormsFormItemConfigBaseInput, NgsFormsInternalService } from '../../internal';
import { FormControl, UntypedFormControl, UntypedFormGroup, ValidatorFn } from '@angular/forms';
import { Directive, Injector, OnInit } from '@angular/core';
import { NgsFormsBaseClassFormComponent } from './form-component.class';
import { Observable } from 'rxjs';

@Directive({}) // for compiler
export class NgsFormsBaseClassFormInputComponent extends NgsFormsBaseClassFormComponent implements OnInit {

  private formGroup = this.injector.get<UntypedFormGroup>(NGS_FORMS_FORM_GROUP);
  private parentVisibility$ = this.injector.get<Observable<boolean>>(NGS_PARENT_VISIBILITY);
  private isVisible: boolean | undefined;
  private privateService = this.injector.get<NgsFormsInternalService>(NgsFormsInternalService);
  private inputConfig = this.itemData.config as NgsFormsFormItemConfigBaseInput;
  control: UntypedFormControl | undefined;
  errorMessage = '';

  private submitted = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.control = new FormControl(this.inputConfig.value, { validators: [] });
    this.bindSubmitted();
    this.bindVisible();
    this.bindValidators();
    this.bindControlValidityChange();
  }

  private bindValidators() {
    if (!this.inputConfig.validators && !this.inputConfig.validators$) return;
    if (this.inputConfig.validators) {
      this.control!.setValidators(this.inputConfig.validators);
      return;
    }
    if (this.inputConfig.validators$)
    {
      this.subscribe(this.inputConfig.validators$!, (validators: Array<ValidatorFn>) => this.control!.setValidators(validators));
    }
  }

  private bindVisible() {
    this.subscribe(
      this.parentVisibility$,
      isVisible => {
        if (this.isVisible === isVisible) return;
        this.isVisible = isVisible;
        if (isVisible) {
          this.formGroup.addControl(this.inputConfig.name, this.control);
          return;
        }
        this.formGroup.removeControl(this.inputConfig.name);
      }
    );
  }

  private bindSubmitted() {
    this.subscribe(this.privateService.isSubmitted$,
      submitted => {
        this.submitted = submitted;
        //this.updateErrorMessage();
      });
  }

  private bindControlValidityChange() {
    // TODO: Add form wide debounce
    /*
    this.subscribe(this.control!.valueChanges,
      _ => this.updateErrorMessage()
    );
     */
  }
/*
  private updateErrorMessage() {

  }

 */
}
