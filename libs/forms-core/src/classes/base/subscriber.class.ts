import { Observable, takeUntil, Subject} from 'rxjs';
import { Directive } from '@angular/core';
@Directive() // No-op, just for Angular compiler
export abstract class NgsSubscriber {
  protected readonly destroy$ = new Subject<void>();

  subscribe<T>(
    subscribeTo: Observable<T>,
    nextObserver: (value: T) => void,
  ): void {
    subscribeTo.pipe(takeUntil(this.destroy$)).subscribe(nextObserver);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
