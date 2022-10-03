import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { StepsComponentEnum } from './enums/steps-component.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-fintranet';

  public items: any;

  public activeIndex: number = 0;
  public stepsComponentEnum: typeof StepsComponentEnum = StepsComponentEnum;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Upload Image',
      },
      {
        label: 'Seat',
      },
      {
        label: 'Payment',
      },
      {
        label: 'Confirmation',
      },
    ];
  }

  public changeStep(index: number): void {
    console.log(index);
    this.activeIndex = index;
  }
}
