import { Pipe, PipeTransform } from '@angular/core';
import { NewUsers } from '../interfaces/newUsers';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(user: NewUsers[], orderBy: string ): NewUsers[] {

    switch (orderBy) {
      case 'reset':
        return user.sort((a,b) => (a.country<b.country) ? 1:-1)
      case 'country':
        return user.sort((a,b) => (a.country>b.country) ? 1:-1)
      default:
        return user
    }
  }

}
