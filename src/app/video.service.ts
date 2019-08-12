import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError, tap } from 'rxjs/operators';

export interface VideoType {
  title: string;
  author: string;
  id: string;
  viewDetails: [
    {
      age: number,
      region: string,
      date: string
    }
  ];
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videoUrl = 'http://api.angularbootcamp.com';
  constructor(private http: HttpClient) { }

  loadVideos() {
    return this.http.get<VideoType[]>(this.videoUrl + '/videos');
      // .pipe(
      //   tap(data => console.log('data: ' + data))
      // )
  }
}
