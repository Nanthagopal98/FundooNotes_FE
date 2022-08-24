import { registerLocaleData } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token')}
  register(reqData: any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('/User/Register',reqData,false,header)
  }

  login(reqData: any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('/User/Login',reqData,false,header)
  }

  forgetPassword(reqData: any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/',
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('/User/ForgetPassword?Email='+reqData.Email,{},false,header)
  }
  reset(reqData: any, token :any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+token
      })
    }
    return this.httpService.postServiceReset('/User/ResetPassword?password='+reqData.password+'&confirmPassword='+reqData.confirmPassword,{},true,header)
  }

  }

 