import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
  standalone: false
})
export class FormatPipe implements PipeTransform {

  transform(value: any): String {
    return `Username is "${value.user}" and password is"${value.pwd}".`;
  }
}