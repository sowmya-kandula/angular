import { Component, OnInit } from '@angular/core';
import { MobilesdataService } from '../mobilesdata.service';
import { product } from '../model/products.model';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{
constructor(private mobobj:MobilesdataService){}
list:any;
 ngOnInit(){
   this.list=this.mobobj.getMobiles();
 }
    received=[];
    recount=0;
    receivedproduct(pr)
    {
      this.received.push(pr);
      console.log(this.received);
      this.recount++;
    }

}
