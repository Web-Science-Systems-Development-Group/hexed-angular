import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @ViewChild('name', {static: true}) nameElem?: ElementRef;
  @ViewChild('time', {static: true}) timeElem?: ElementRef;
  @Output('name') nameOutput = new EventEmitter<string>();
  @Output('time') timeOutput = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // hidden = true;
    if(!this.nameElem || !this.timeElem) {
      return;
    }
    this.nameOutput.emit(this.nameElem.nativeElement.value);
    this.timeOutput.emit(this.timeElem.nativeElement.value || 60);
    // console.log(this.nameElem.nativeElement.value)
    // console.log(this.timeElem.nativeElement.value)
  }

  getTime(): number{
    return this.timeElem?.nativeElement.value;
  }
  getName(): string{
    return this.nameElem?.nativeElement.value
  }
}
