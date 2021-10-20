import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ChatMessage = {
    name: "",
    message: "",
    channel: "",
    created_on: new Date,
    updated_on: new Date,
    author: ""
  };

  constructor() { }

  ngOnInit() {
  }

}
