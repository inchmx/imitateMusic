import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { MyMusicIndexComponent } from './my-music/my-music-index/my-music-index.component';
import { FriendIndexComponent } from './friend/friend-index/friend-index.component';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    MyMusicIndexComponent,
    FriendIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  page = 1;
}
