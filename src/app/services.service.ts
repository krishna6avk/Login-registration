import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  urlLogin = 'https://reqres.in/api/login';
  urlTable = 'https://reqres.in/api/users?page=2';
  urlregist= 'https://reqres.in/api/register';
  constructor(private objHTTP: HttpClient, private objrouter : Router ) { }

  login(frmLoginObj){
    return this.objHTTP.post(this.urlLogin,frmLoginObj).pipe(map(res=>res));
  }

  table(tabledata){
    return this.objHTTP.get(this.urlTable,tabledata).pipe(map(res=>res));
  }

  registration(register){
    return this.objHTTP.post(this.urlregist,register).pipe(map(res=>res));
  }
}
