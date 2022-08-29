import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any;
  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token')}

  addNotes(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('/Notes/Create',reqData, true, header);
  }

  getNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('/Notes/Get', true, header);
  }

  updateNotes(reqData:any, notesId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('/Notes/Update?notesId='+notesId, reqData ,true, header);
  }
  
}
