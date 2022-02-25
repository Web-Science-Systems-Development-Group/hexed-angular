import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  //Leaderboard of tuples maybe? one with name then the score -> sort by score when a new highscore enters
  public leaderboard = [];

  constructor() { }

  ngOnInit(): void {
  }

}
