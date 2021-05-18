import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private dsobj: HttpClient) { }
  getData():Observable<any>
  {
     return this.dsobj.get<any>("https://reqres.in/api/unknown");
  }
  getinformation():Observable<any>
  {
    return this.dsobj.get<any>("https://jsonplaceholder.typicode.com/users");
  }
  //data from json
  getusers():Observable<any>
  {
    return this.dsobj.get<any>("  http://localhost:3000/users");
  }
  getdetails(id):Observable<any>
  {
    return this.dsobj.get<any>(" http://localhost:3000/users/"+id)
  }
  
}
