import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideoDashboardComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
