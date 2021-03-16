import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[] | null, key: string): any[] | null {
    if(!Array.isArray(value) || !key){
      return value
    }

    return value.sort(
      function(a: any, b:any): any {
        if(typeof a[key] === 'number' && typeof b[key] === 'number') {
          return a[key] - b[key];
        } else {
          const itemA: string = ('' + a[key]);
          const itemB: string = ('' + b[key]);
          return itemA.localeCompare(itemB);
        }
      }
    )
  }

}
