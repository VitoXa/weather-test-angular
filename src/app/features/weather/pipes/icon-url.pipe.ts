import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconUrl',
  standalone: true
})
export class IconUrlPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    const strNumbr = value / 10 < 1 ? "0" + value : value.toString(10);
    return `https://developer.accuweather.com/sites/default/files/${strNumbr}-s.png`;
  }

}
