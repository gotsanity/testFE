import { ChatMessage } from './../models/chat';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  public obs: Observable<number> = interval(5000);

  public data: ChatMessage[] = [];

  private apiUrl = "http://73.19.65.35:3500/api/";

  constructor(private http: HttpClient) {
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

  public getChannels(): Observable<any> {
    // we this to return a string array of the channel names as an observable
    return this.http.get(this.apiUrl + "channel/").pipe(
      tap((data) => {
        console.log("the channel list is: ", data);
      }),
      map((data) => {
        return data;
      })
    );
  }
}
