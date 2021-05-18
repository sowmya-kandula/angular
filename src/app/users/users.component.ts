import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  constructor( private obj:DataService,private route:Router) { }
  userslist:any;
  ngOnInit(): void {
    this.obj.getusers().subscribe(
     data=>{this.userslist=data;},
     err=>{console.log("error in reading users=",err);}
    )
    
  }
  onselectid(id)
  {
    this.route.navigateByUrl('users/'+id);
  }

}
