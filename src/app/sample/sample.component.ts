import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  constructor(private obj:DataService) { }
   info:any;
   data:any;
   mysub:Subscription;
   mysub2:Subscription;
  ngOnInit(): void {
  
   this.mysub= this.obj.getData().subscribe(
      information=>{this.info=information;
      console.log(this.info)},
      err=>{console.log("error=",err)}
    )
    this.mysub2=this.obj.getinformation().subscribe(
      information=>{this.data=information;console.log(this.data)},
      err=>{console.log("err occured in 2nd object:",err)}
    )
  }
  ngOnDestroy(){
    this.mysub.unsubscribe();
    this.mysub2.unsubscribe();
  }

}
