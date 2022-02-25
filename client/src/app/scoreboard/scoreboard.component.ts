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
    this.leaderboard.sort(((a, b) => b[1] - a[1]));
    this.leaderboard = this.leaderboard.slice(0, 10);

    console.log(this.leaderboard);
    // TODO if score > position 10, send score to remote server
  }

  ngOnInit(): void {
    // TODO get scores from remote server
  }

}
