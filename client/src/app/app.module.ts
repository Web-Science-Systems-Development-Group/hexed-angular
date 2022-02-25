import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ColorComponent } from './color/color.component';
import { TimerComponent } from './timer/timer.component';
import { NameComponent } from './name/name.component';
import { ScoreComponent } from './score/score.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { AjaxComponent } from './ajax/ajax.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ColorComponent,
    TimerComponent,
    NameComponent,
    ScoreComponent,
    ScoreboardComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
