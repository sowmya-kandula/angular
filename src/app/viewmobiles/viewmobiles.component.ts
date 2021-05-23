import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MobilesdataService } from '../mobilesdata.service';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  constructor(private obj:DataService) { }
  list:any;
  searchterm:string;
  ngOnInit(): void {
    this.obj.getMobiles().subscribe(
      data=>{this.list=data;},
     err=>{console.log("error in reading users=",err);}
    );
  }

}
