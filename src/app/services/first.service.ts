import { ChatMessage } from './../models/chat';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  public obs: Observable<number> = interval(5000);

  public data: ChatMessage[] = [];

  constructor() {
    this.obs.subscribe(digit => {
      // console.log('i have recieve a message from the observable', digit);

      this.data.push({
        name: "data" + digit,
        message: "toast" + digit,
        author: "someone",
        created_on: new Date,
        updated_on: new Date,
        channel: "news"
      });
    });
  }

  public getMessage(): Observable<ChatMessage[]> {
    // console.log('I am subscribing to the getMessage', this.data);
    return of(this.data);
  }
}
