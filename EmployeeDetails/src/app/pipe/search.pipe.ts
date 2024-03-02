import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchvalue :any): any {
   
    if(!searchvalue){
      return value
    }
    let originalSearch=searchvalue.toLowerCase()
    return value.filter((item:any)=>{
      return JSON.stringify(item).toLowerCase().includes(originalSearch)
    })
  }

}
