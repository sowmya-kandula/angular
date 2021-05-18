import { Component, OnInit } from '@angular/core';
import { product } from '../model/products.model';
import { TvsdataService } from '../tvsdata.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent  implements OnInit{

 constructor(private tvsobj:TvsdataService){}
 list:any;
 ngOnInit()
 {
  this.list=this.tvsobj.gettvs();
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
