import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {timer} from 'rxjs';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz app';
  counter = 10;
  hasExecuted = false;

  constructor() {
    if (this.hasExecuted)
      timer(1000, 1000) //Initial delay 1 seconds and interval countdown also 1 second
        .pipe(
          takeWhile( () => this.counter > 0 ),
          tap(() => this.counter -= 1)
        )

        .subscribe( () => {
          if (this.counter === 0) {
            //add you more code
            document.location.href = "http://localhost:4200";
            this.hasExecuted = true;
          }

        } );
  }
}

