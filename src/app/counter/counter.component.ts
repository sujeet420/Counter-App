import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  animations: [
    trigger('countAnimation', [
      transition(':increment, :decrement', [
        style({ transform: 'scale(1.1)' }),
        animate('200ms ease-out', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class CounterComponent {
  count = 0;
  listOfHistoryData:any=[];

increment(){
  this.count++;
  this.listOfHistoryData.push(`[+1] Counter is now ${this.count}`)
}

decrement(){
this.count--;
this.listOfHistoryData.push(`[-1] Counter is now ${this.count}`)
}

reset(){
this.count =0;
this.listOfHistoryData.push(`[Reset] Counter is now ${this.count}`)
}

clearHistory(){
this.listOfHistoryData =[];
}

}
