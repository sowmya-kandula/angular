import { Injectable } from '@angular/core';
import { product } from './model/products.model';

@Injectable({
  providedIn: 'root'
})
export class TvsdataService {

  constructor() { }
  private list:product[]=[

    {
      usertitle:"	Samsung LED (Black) ",
      about:"The product line includes the Samsung Galaxy S series of high-end smartphones, the Samsung Galaxy Tab series of tablets, ",
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMsSaqi6-6r7julDSzwydKuwp0vMI9gQmukuMUSe-lrE4g44zIDNpr8qvXoYcPvgm3-iBHzyjo6jkn3qvl7qbpu5zQZiYggQC0xs2EBLTL&usqp=CAE",
      time:"₹25999.00"
    },
    {
    usertitle:"Samsung Series 4 ",
    about:"You Can Now Turn This Samsung Smart Tv Into A Full-fledged Pc Or Your Very Own Virtual Music System. ",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfUEJCL6KmkDyPw_n9OfyIbkXrv3RhgQCjjA-udIUbbHmVyAJXTaR9G_Fg2WpBWA_wpGLisjCa0KKSBqoqEDeUlL37O04piJgCix9XKl0PZqRADSXL2mu67A&usqp=CAE",
    time:"₹13000.00"
    },
    
    {
      usertitle:"Smart Crystal UHD TV",
      about:" You Can Bring Home This Samsung Tv If You Want Your Viewing Experience To Be Captivating, Lifelike, And Crystal-clear. .",
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVTHn-5hgJyvi3_llV5h0tnw1C2-ZvpAFFHWVQFGjHZ3GnAUfi5N_MaQDXnPVMi4s7O-IIUOCSzzR19zZ2g8xbUkyLR7n3F8a063zxBmM&usqp=CAE",
      time:"₹ 82,900.00"
    },
    
    {
      usertitle:"Samsung Series 5 100cm 40 Inch Full Hd Led Tv",
      about:"Samsung · 65 in · Smart TV · 4K · Flat · High Definition · 3840 x 2160",
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfow1_BhDeaApVzTRy0iQjvc_c08AcbEFtZhVRZ8U85b2LQcltCw39f6qVGT2X1oAlZaClE2h8r9Wz8JUI09tAR7DfcQvc8_BuNklOHShHOv4vQrvsTXYaMQ&usqp=CAE",
      time:"₹ 86,900.00"
    },
    
    {
      usertitle:"Samsung Series 5 100cm 40 Inch Full Hd Led Tv",
      about:"Your favourite content will now look even more colourful. This Samsung TV is equipped with the Wide Colour Enhancer technology.",
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMsSaqi6-6r7julDSzwydKuwp0vMI9gQmukuMUSe-lrE4g44zIDNpr8qvXoYcPvgm3-iBHzyjo6jkn3qvl7qbpu5zQZiYggQC0xs2EBLTL&usqp=CAE",
      time:"₹ 34,900.00"
    },
    
    
    ];
    gettvs():product[]{
      return this.list;
    }
}
