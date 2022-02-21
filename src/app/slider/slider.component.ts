import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() color = '';
  @ViewChild('input') input?: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  output() : void {
    if(!this.input) {
      return;
    }
    console.log((this.input as any).nativeElement.value);
  }


}
