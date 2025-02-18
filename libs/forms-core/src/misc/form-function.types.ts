import { Injector } from '@angular/core';
import { UntypedFormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export type NgsFormItemVisibilityFn = (injector: Injector, baseFormGroup: UntypedFormGroup) => Observable<boolean> | boolean
export type NgsFormValidatorArrayBuilderFn = (injector: Injector, baseFormGroup: UntypedFormGroup) => Observable<Array<ValidatorFn>> | Array<ValidatorFn>
export type NgsFormDisableFn = (injector: Injector, baseFormGroup: UntypedFormGroup) => Observable<boolean> | boolean
