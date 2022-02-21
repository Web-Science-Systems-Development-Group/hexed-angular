import { Component, OnInit } from '@angular/core';
import Color from '../../classes/Color.class';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  // @Input() scoreNum: int = new Color().getScore();

  constructor() { }

  ngOnInit(): void {

  }

}
