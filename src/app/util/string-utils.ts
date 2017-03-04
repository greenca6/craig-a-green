import { Injectable } from '@angular/core';


@Injectable()
export class StringUtils {

  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static titleize(str: string) {
    return str.split(' ').map(word => this.capitalize(word)).join(' ');
  }
}
