import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users:any;
  constructor(private obj:DataService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.obj.getdetails(id).subscribe(
      data=>{this.users=data},
      err=>{console.log("err=",err)}
    )
  }

}
