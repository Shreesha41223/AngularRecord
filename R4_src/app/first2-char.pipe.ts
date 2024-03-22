import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first2Char',
  standalone: true
})
export class First2CharPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,2);
  }

}
