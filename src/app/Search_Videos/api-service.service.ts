import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response_Video_Data } from '../Models/response_video_data';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http: HttpClient) { }
  // prompt: string = 'natural'
  // urlApi: string = `https://localhost:7136/api/VidClip?prompt=${this.prompt}`;
  // GetVideos(): Observable<Response_Video_Data>{
  //   return this._http.get<Response_Video_Data>(this.urlApi);
  // }

  // urlBaseApi: string = 'https://localhost:7136/api/VidClip?prompt=';
  urlBaseApi: string = 'https://cors-anywhere.herokuapp.com/http://www.vidclip.somee.com/api/VidClip?prompt=';
  GetVideosByPromt(prompt: string): Observable<Response_Video_Data>{
    return this._http.get<Response_Video_Data>(this.urlBaseApi + prompt);
  }
}