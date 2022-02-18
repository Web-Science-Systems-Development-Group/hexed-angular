import { Component, OnInit } from '@angular/core';
import Color from '../classes/Color.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  colorStr: string = new Color().toString();

  ngOnInit() {
    console.log();
  }

}