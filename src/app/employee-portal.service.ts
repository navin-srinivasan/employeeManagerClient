import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Userlogin } from './userlogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeePortalService {

  _getAllRecordUrl = 'http://localhost:8080/webapi/resource';
  _delelteRecordUrl = 'http://localhost:8080/webapi/resource/deleteRecord/';
  _createRecordUrl = 'http://localhost:8080/webapi/resource/createRecord';
  _loginurl = 'http://localhost:8080/webapi/resource/login';
  _updateRecordUrl = 'http://localhost:8080/webapi/resource/updateRecord'
  _fetchRecordUrl = 'http://localhost:8080/webapi/resource/fetch/';
  _logout = 'http://localhost:8080/webapi/resource/logout' ;
  constructor(private _http: HttpClient) { }

  login(userlogin: Userlogin):Observable<any> {
    let userString: string = JSON.stringify(userlogin);
    return this._http.post(this._loginurl, userString);
  }

  getAllRecord(): Observable<any> {
    return this._http.get(this._getAllRecordUrl);
  }

  fetchRecord(employeeId: number) {
    return this._http.get(this._fetchRecordUrl + employeeId);
  }

  deleteRecord(addedby:string ,employeeId: number):Observable<String> {
    return this._http.delete(this._delelteRecordUrl +addedby+ '/'+ employeeId,{responseType:'text'});
  }

  createRecord(employeeBean: any):Observable<String> {
    let employeeBeanString: string = JSON.stringify(employeeBean);
    return this._http.post(this._createRecordUrl, employeeBeanString,{responseType:'text'});
  }

  updateRecord(updateBean: any):Observable<String> {
    let updateBeanString: string = JSON.stringify(updateBean);
    return this._http.put(this._updateRecordUrl, updateBeanString,{responseType:'text'});
  }

  logout(username:string){
    return this._http.post(this._logout,username);
  }

}
