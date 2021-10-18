import { FirstService } from './services/first.service';
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

  data: ChatMessage[] = [];

  constructor(public service: FirstService) {}

  ngOnInit(): void {
    this.service.getMessage().subscribe((data) => {
      this.data = data;
    });
  }


  toggleLoaded() {
    this.isLoaded = !this.isLoaded;
  }
}
