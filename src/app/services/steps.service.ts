import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SummaryOfSteps } from '../interfaces/steps.interface';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  public summaryData: SummaryOfSteps = {};
  public summaryChange$ = new BehaviorSubject<SummaryOfSteps>({});
  public get summary(): SummaryOfSteps {
    return this.summaryChange$.value;
  }

  public setSummaryData(value: SummaryOfSteps): void {
    this.summaryChange$.next(value);
  }
}
