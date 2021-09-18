import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string, prefix:string, defaultText?:string): string {
    if(value) {
      if(prefix)return `${prefix}.${value}`;
      else return value;
    }
    else  {
      if(prefix)return `${prefix}.title`;
      else return defaultText;
    }
  }

}
