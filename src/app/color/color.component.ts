import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import Color from '../../classes/Color.class';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input() colorStr: string|null = new Color().toString();
  @ViewChild('currentColor', { static: true }) currentColorElem?: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
      
  }

}
