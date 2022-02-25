import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import Color from '../classes/Color.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hidden = false;


  @ViewChild('timer') timer?: ElementRef;
  colorStr: string = new Color().toString();
  seconds: number = 60;
  totalTime: number = 60;
  

  ngOnInit() {
  }

  updateName(name: string) {
    this.hidden = name.length > 0;
    // Trick to push event to end of event loop, allowing Angular to rerender the DOM.
    setTimeout(() => {
      if(this.timer != undefined) {
        this.totalTime = this.seconds;
        (this.timer as any).start();
      }
    }, 0);
  }

  updateTime(time: number) {
    this.seconds = time;
  }

  resetColor(){
    (this.timer as any).stop();
    this.seconds = this.totalTime;
    (this.timer as any).secondsRemaining = this.totalTime;
    this.colorStr = new Color().toString();
    (this.timer as any).start();
  }

  submitGuess(){
    (this.timer as any).stop();
    
    //(document.getElementById('red') as any).nativeElement.value;
    //console.log(r);
  }

}
