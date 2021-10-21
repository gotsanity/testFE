import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
