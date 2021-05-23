import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Mobile } from './model/mobile.model';
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
  getMobiles():Observable<Mobile[]>
  {
    return this.dsobj.get<any>("http://localhost:3000/mobiles")
  }
  getdetails(id):Observable<any>
  {
    return this.dsobj.get<any>(" http://localhost:3000/users/"+id)
  }
  createNewMobile(obj):Observable<any>
  { 
    return this.dsobj.post<any>("http://localhost:3000/mobiles",obj);
   
  }
  sendingmodifiedobj(obj):Observable<any>
  { console.log("updated");
    return this.dsobj.put("http://localhost:3000/mobiles/"+obj.id,obj);
  }
  fordeleting(ind):Observable<any>
  {
    alert("product deleted");
    return this.dsobj.delete("http://localhost:3000/mobiles/"+ind)
  }
  userlogin():boolean{
    if(localStorage.getItem("username")==null)
       {return false;}
    else
    {return true;}
  }
  userLogout(){
    localStorage.clear();
  }
  
}
