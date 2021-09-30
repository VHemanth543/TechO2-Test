import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  setData(data : any) : Observable<any>{
    let headers = new HttpHeaders();
        headers.append('Content-Type' , 'application/json');
        return this.http.post("http://localhost:8000/add" , data , {headers : headers});
  }

  userLogin(data : any):Observable<any>{
    let header = new HttpHeaders();
    header.append('Content-Type' , 'application/json')
    return this.http.post("http://localhost:8000/login",data, {headers : header})
  
  }
  getData() : Observable<any>{
    let header = new HttpHeaders();
    header.append('Content-Type' , 'application/json')
    return this.http.get("http://localhost:8000/get-users", {headers : header})
  
  }

  deleteUser(data :any) : Observable<any>{
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json')
    return this.http.delete("http://localhost:8000/delete",{headers : header, body : data})
  }

  
  userdatails : any ;
   Setuserdetails(data : any){
      this.userdatails = data
  }
  Getuserdetails() {
    return this.userdatails
  }
}
