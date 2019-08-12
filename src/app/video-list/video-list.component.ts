import { VideoType } from './../video.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videoData: VideoType[];
  @Output() public selectVideoEvent = new EventEmitter<VideoType>(); 
  // get output emitter working
  selectedVideo;
  constructor() { }

  ngOnInit() {
  }

  selectVideo(video: VideoType) {
    this.selectedVideo = video;
    this.selectVideoEvent.emit(video);
  }

}
