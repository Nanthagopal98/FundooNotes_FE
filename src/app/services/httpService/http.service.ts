import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseurl;
  constructor( private httpClient : HttpClient) { }

  postService(url: string, reqData: any, token: boolean=false, httpOptions: any={}){
    return this.httpClient.post(this.baseUrl+url, reqData, token && httpOptions)
  }

  postServiceReset(url: string, reqData: any, token: boolean=true, httpOptions: any={}){
    return this.httpClient.post(this.baseUrl+url, reqData, token && httpOptions)
  }

  getService(url: string, token: boolean=true, httpOptions: any={}){
    return this.httpClient.get(this.baseUrl+url, token && httpOptions)
  }

  putService(url: string, reqData: any, token: boolean=true, httpOptions: any={}){
    return this.httpClient.put(this.baseUrl+url, reqData, token && httpOptions)
  }
}
