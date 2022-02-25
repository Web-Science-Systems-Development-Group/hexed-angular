import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  //Leaderboard of tuples maybe? one with name then the score -> sort by score when a new highscore enters
  public leaderboard: [string, number][] = [];
  @Input() score= 0;
  @Input() PersonName = '';

  constructor() { 
   let x: [string, number];
   x = [this.PersonName, this.score];
   this.leaderboard.push(x)
   console.log(this.leaderboard);
  }

  ngOnInit(): void {
  }

}
