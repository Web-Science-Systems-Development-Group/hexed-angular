import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public getScores() {
    return this.httpClient.get("http://localhost:3000/api/getscores");
  }

  public sendScore(name: string, score: number) {
    return this.httpClient.get("http://localhost:3000/api/sendscore?name=" + name + "&score=" + score);
  }
}
