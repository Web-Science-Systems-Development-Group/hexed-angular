import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  leaderboard: [string, number][] = [];


  constructor(private httpService: HttpService) { }

  update(PersonName: string, score: number){
    // Don't add score if it's less than all values on the leaderboard.
    if(score <= this.leaderboard[this.leaderboard.length - 1][1]) {
      return;
    }

    let x: [string, number];
    x = [PersonName, score];
    this.leaderboard.push(x);
    this.leaderboard.sort(((a, b) => b[1] - a[1]));
    this.leaderboard = this.leaderboard.slice(0, 10);

    this.httpService.sendScore(PersonName, score).subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.httpService.getScores().subscribe((data: any) => {
      for(const prop in data.scores) {
        if(!data.scores.hasOwnProperty(prop)) {
          continue;
        }
        this.leaderboard.push([prop, data.scores[prop]])
      }
      this.leaderboard.sort(((a, b) => b[1] - a[1]));
    })
  }

}
