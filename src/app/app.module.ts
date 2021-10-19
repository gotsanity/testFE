import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstService } from './services/first.service';
import { ChatListComponent } from './chatList/chatList.component';

@NgModule({
  declarations: [	
    AppComponent,
      ChatListComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
