import { VideoService, VideoType } from './../video.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  @Input() selectedVideo: VideoType;
  videoData: Observable<VideoType[]>;

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.videoData = this.videoService.loadVideos()
      .pipe(tap(data => this.selectedVideo = data[0]));
  }

  selectVideoEvent(e) {
    this.selectedVideo = e;
    console.log('e: ', e);
  }

}
