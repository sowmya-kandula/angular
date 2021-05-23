import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(mobiles:any[], searchterm:string): any[] {
    if(!mobiles || !searchterm)
    {return mobiles;}
    else
    {
      return mobiles.filter(mobobj=>mobobj.usertitle.toLowerCase().indexOf(searchterm.toLowerCase())!==-1)
    }
  }

}
