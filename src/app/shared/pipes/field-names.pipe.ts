import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldNames'
})
export class FieldNamesPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    const field = value.split(/(?=[A-Z])/).join(' ');
    return field;
  }

}
