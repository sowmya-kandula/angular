import { Component,EventEmitter,Input,Output} from '@angular/core';
import { product } from '../model/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  @Input() pro:product;
  @Output() myevent=new EventEmitter();
  sendingtoparent(protitle){
    this.myevent.emit(protitle);
  }
}
