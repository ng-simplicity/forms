import { BehaviorSubject } from 'rxjs';
import { FormGroup, UntypedFormGroup } from '@angular/forms';
import { NgsFormConfig } from "../../internal";
import { Injectable } from '@angular/core';

@Injectable()
export class NgsFormsInternalService {
  formGroup$ = new BehaviorSubject<FormGroup>(new UntypedFormGroup({}));
  formConfig$ = new BehaviorSubject<NgsFormConfig | undefined>(undefined);
  isSubmitted$ = new BehaviorSubject<boolean>(false);
  setIsSubmitted(isSubmitted: boolean) : void{
    this.isSubmitted$.next(isSubmitted);
  }

  checkIsValid(): boolean{
    if(!this.formGroup$.value) return  false;
    return  this.formGroup$.value.valid;
  }

  setFormData(formConfig: NgsFormConfig){
    this.formGroup$.next(new UntypedFormGroup({}));
    this.formConfig$.next(formConfig);
    this.isSubmitted$.next(false);
  }
}
