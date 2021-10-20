import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstService } from './services/first.service';
import { ChatListComponent } from './chatList/chatList.component';
import { ChatMessageComponent } from './chatMessage/chatMessage.component';

@NgModule({
  declarations: [		
    AppComponent,
      ChatListComponent,
      ChatMessageComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
