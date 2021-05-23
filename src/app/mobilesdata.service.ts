import { Injectable } from '@angular/core';
import { product } from './model/products.model';
@Injectable({
  providedIn: 'root'
})
export class MobilesdataService {

  constructor() { }
  private list:product[]=[

    {
      usertitle:"Galaxy F62 ",
      about:"The product line includes the Samsung Galaxy S series of high-end smartphones, the Samsung Galaxy Tab series of tablets, ",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e625fzkdins/gallery/in-galaxy-f62-6gb-ram-sm-e625fzkdins-414068150?$684_547_PNG$",
      time:"₹25999.00"
    },
    {
    usertitle:"Galaxy F12",
    about:"the Samsung Galaxy Note series of tablets and phablets with the added functionality of a stylus,",
    image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-f127glbgins/gallery/in-galaxy-f12-4gb-ram-sm-f127glbgins-419015707?$684_547_PNG$",
    time:"₹13000.00"
    },
    
    {
      usertitle:"Apple iPhone 11- Black",
      about:" smartwatches including the first version of the Samsung Galaxy Gear, with later versions dropping the Galaxy branding",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e625fzkdins/gallery/in-galaxy-f62-6gb-ram-sm-e625fzkdins-414068150?$684_547_PNG$",
      time:"₹ 82,900.00"
    },
    
    {
      usertitle:"Apple iPhone 10-black",
      about:"The product line includes the Samsung Galaxy S series of high-end smartphones, the Samsung Galaxy Tab series of tablets,",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-f127glbgins/gallery/in-galaxy-f12-4gb-ram-sm-f127glbgins-419015707?$684_547_PNG$",
      time:"₹ 86,900.00"
    },
    
    {
      usertitle:"Galaxy A72",
      about:"with later versions dropping the Galaxy branding, until the release of the Samsung Galaxy Watch in 2018.",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a725flvgins/gallery/in-galaxy-a72-a725-sm-a725flvgins-409773725?$684_547_PNG$",
      time:"₹ 34,900.00"
    },
    
    {
      usertitle:"Apple iPhone XR",
      about:" the foldable Samsung Galaxy Z series, and smartwatches including the first version of the Samsung Galaxy Gear",
      image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a725flvgins/gallery/in-galaxy-a72-a725-sm-a725flvgins-409773725?$684_547_PNG$",
      time:"₹ 54,900.00"
    }
    ];
    getMobiles():product[]{
      return this.list;
    }
}