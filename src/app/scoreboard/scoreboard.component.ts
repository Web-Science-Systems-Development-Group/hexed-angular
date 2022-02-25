import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  leaderboard: [string, number][] = [];
  

  constructor() { }

  update(PersonName: string, score: number){
    let x: [string, number];
    x = [PersonName, score];
    this.leaderboard.push(x);
    this.leaderboard.sort;
    console.log(this.leaderboard);
  }

  ngOnInit(): void {
  }

}
