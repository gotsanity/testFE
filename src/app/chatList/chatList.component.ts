import { ChatMessage } from './../models/chat';
import { FirstService } from './../services/first.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatList',
  templateUrl: './chatList.component.html',
  styleUrls: ['./chatList.component.scss']
})
export class ChatListComponent implements OnInit {
  isLoaded: boolean = false;
  messages: ChatMessage[] = [];

  constructor(public service: FirstService) {
    this.service.getMessage().subscribe((data) => {
      this.isLoaded = true;
      console.log("chatlist recieved: ", data);
      this.messages = data;
    });

    this.service.getChannels().subscribe((data) => {
      console.log("the component got the following channels: ", data);
    });
  }

  ngOnInit(): void {

  }

}
