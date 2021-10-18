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
    this.obs.subscribe(this.addData);
  }

  private addData(digit: Number) {
    var obj = {
      name: "data" + digit,
      message: "toast" + digit,
      author: "someone",
      created_on: new Date,
      updated_on: new Date,
      channel: "news"
    };

    this.data.push(obj);
  }

  public getMessage(): Observable<ChatMessage[]> {
    return of(this.data);
  }
}
