import { Component, OnInit } from '@angular/core';
import { CamdataService } from '../camdata.service';
import { product } from '../model/products.model';
@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {
constructor(private camobj:CamdataService){}
list:any;
ngOnInit()
{
  this.list=this.camobj.getcam();
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
