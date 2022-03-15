import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  leaderboard: {name: string, score: number}[] = [];


  constructor(private httpService: HttpService) { }

  update(PersonName: string, score: number){
    // Don't add score if it's less than all values on the leaderboard.
    if(this.leaderboard.length >= 10 && score <= this.leaderboard[this.leaderboard.length - 1].score) {
      return;
    }

    let x: {name: string, score: number};
    x = {name: PersonName, score: score};
    this.leaderboard.push(x);
    this.leaderboard.sort(((a, b) => b.score - a.score));
    this.leaderboard = this.leaderboard.slice(0, Math.min(10, this.leaderboard.length));

    this.httpService.sendScore(PersonName, score).subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.httpService.getScores().subscribe((data: any) => {
      for(const score of data) {
        this.leaderboard.push({
          name: score.name,
          score: score.score
        })
      }
      this.leaderboard.sort(((a, b) => b.score - a.score));
      console.log(this.leaderboard);
    })
  }

}
