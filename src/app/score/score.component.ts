import { Component, OnInit } from '@angular/core';
import Color from '../../classes/Color.class';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  scoreNum: number = 0;

  constructor() { }

  ngOnInit(): void {}

  calcScore(submit: Color, timeRemaining: number, totalTime: number){
    this.scoreNum = submit.getScore(submit, timeRemaining, totalTime);
  }
}
