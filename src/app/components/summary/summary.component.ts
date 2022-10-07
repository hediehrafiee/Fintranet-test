import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { STATUS_COLORS } from '../../constants/status.const';
import { SummaryOfSteps } from '../../interfaces/steps.interface';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit, OnDestroy {
  public statusColor = STATUS_COLORS;
  private subscription = new Subscription();

  public summaryOfSteps: SummaryOfSteps;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    const summary: Subscription = this.stepsService.summaryChange$.subscribe(
      (summary: SummaryOfSteps) => {
        this.summaryOfSteps = summary;
      }
    );

    this.subscription.add(summary);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
