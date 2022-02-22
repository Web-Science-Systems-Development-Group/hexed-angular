import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Color from '../classes/Color.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hidden = false;


  @ViewChild('timer', {static: true}) timer?: ElementRef;
  colorStr: string = new Color().toString();
  seconds: number = 60;
  

  ngOnInit() {
    if(this.timer != undefined) {
      (this.timer as any).start();
    }
  }

  updateName(name: string) {
    console.log(name);
  }
  updateTime(time: number) {
    this.seconds = time;
  }
}
