import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import Color from '../../classes/Color.class';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input() colorStr: string = new Color().toString();

  constructor() { }

  ngOnInit(): void {

  }

}
