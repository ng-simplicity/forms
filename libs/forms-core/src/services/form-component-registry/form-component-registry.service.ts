import { Injectable, Type } from '@angular/core';
@Injectable({providedIn: 'platform'})
export class NgsFormsComponentRegistryService {
  private readonly itemComponentRegistry: TItemComponentRegistry = {};
  getComponentTypeForKey(key: string): Type<unknown> | undefined {
    return this.itemComponentRegistry[key];
  }
  register(key: string,component: Type<unknown>): void {
    this.itemComponentRegistry[key] = component;
  }
}

type TItemComponentRegistry = {[key: string]: Type<unknown>}
