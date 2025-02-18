import { UntypedFormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NgsFormConfig, NgsFormsInternalService } from '../../internal';

export class NgsFormsService {
  attempt=0;
  private internalFormService: NgsFormsInternalService | undefined;
  private formGroup = new UntypedFormGroup({})
  private formGroupValueChangeSubscription: Subscription | undefined;
  formValue$ = new BehaviorSubject<any>({})
  formValue: any = {};

  setFormConfig(formConfig: NgsFormConfig): void {
    if (!this.internalServiceIsSet) {
      if(this.attempt > 20){
        console.error("Internal form service is unavailable.  Is the ngs-form root tag added to the page?")
        return;
      }
      this.attempt++;
      setTimeout(()=>this.setFormConfig(formConfig),25);
      return;
    }
    this.internalFormService!.setFormData(formConfig);
  }
  get internalServiceIsSet(): boolean {
    return !!this.internalFormService;
  }

  get isValid(): boolean{
    if (!this.internalServiceIsSet) return false;
    return this.internalFormService!.checkIsValid()
  }
  setInternalService(internalFormsService: NgsFormsInternalService): void {
    this.internalFormService = internalFormsService;
    this.bindFormGroup()
  }

  private bindFormGroup(): void {
    this.internalFormService!.formGroup$.subscribe(fg => {
      this.formGroup = fg;
      if (this.formGroupValueChangeSubscription) this.formGroupValueChangeSubscription.unsubscribe()
      this.formGroupValueChangeSubscription = this.formGroup.valueChanges.subscribe(v => {
        this.formValue = v;
        this.formValue$.next(v);
      })
    })
  }

  setIsSubmitted(isSubmitted: boolean): void {
    if (!this.internalServiceIsSet) return;
    this.internalFormService!.setIsSubmitted(isSubmitted)
  }
}
