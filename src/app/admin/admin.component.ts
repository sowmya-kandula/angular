import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Mobile } from '../model/mobile.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private obj:DataService) { }
  list:any;
  status:boolean=false;
  newmobile=new Mobile('','','','');
  mobind;
  ngOnInit(): void {
    this.obj.getMobiles().subscribe(
      data=>{this.list=data;},
     err=>{console.log("error in reading users=",err);}
    );
  }
  onedit(mob,ind)
  {
    this.status=true;
    this.mobind=ind;
    this.newmobile=mob;
    console.log(this.newmobile);
    
  }
  onsave(mobobj){
    this.status=false;
    mobobj.id=this.newmobile["id"];
    mobobj.image=this.newmobile["image"];
    mobobj.time=this.newmobile["time"];
    this.obj.sendingmodifiedobj(mobobj).subscribe(
      res=>{console.log("subs",res) } ,
      err=>{console.log("err in modified obj",err)}
    )
    
  }
  ondelete(mobobj){
    this.obj.fordeleting(mobobj.id).subscribe(
      res=>{console.log("deleted ",res)},
      err=>{console.log("error in deleting")}
    )
  }

}
