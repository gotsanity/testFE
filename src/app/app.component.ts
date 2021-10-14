import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ChatMessage } from './models/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoaded: boolean = false;
  
  obs: Observable<number> = interval(5000);

  data: ChatMessage[] = [];

  ngOnInit(): void {

    this.obs.subscribe((d) => {
      // this.isLoaded = true;
      //this.toggleLoaded();
      this.data.push({
        name: "data" + d,
        message: "toast" + d,
        author: "someone",
        created_on: new Date,
        updated_on: new Date,
        channel: "news"
      });
    })
  }


  toggleLoaded() {
    this.isLoaded = !this.isLoaded;
  }
}
