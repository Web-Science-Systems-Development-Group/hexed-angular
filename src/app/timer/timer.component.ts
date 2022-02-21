import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  intervalId: number|null = null;
  @Input('seconds') secondsRemaining: number = 60;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    if(this.intervalId != null) {
      clearInterval(this.intervalId);
    }
    this.intervalId = window.setInterval(() => {
      if(--this.secondsRemaining <= 0) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    if(this.intervalId != null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

}
