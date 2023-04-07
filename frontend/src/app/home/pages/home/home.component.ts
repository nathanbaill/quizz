import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/home/interfaces/question.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
time: number = 5;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => { if (this.time > 0) this.time--; }, 1000);
    
  }

}
