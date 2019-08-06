import { VideoService, VideoType } from './../video.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  videoData: Observable<VideoType[]>;
  selectedVideo;

  constructor(private videoService: VideoService) {
    this.videoData = videoService.loadVideos()
      .pipe(tap(data => this.selectedVideo = data[0]));
  }

  ngOnInit() {
  }

}
