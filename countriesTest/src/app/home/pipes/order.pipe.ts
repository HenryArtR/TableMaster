import { Pipe, PipeTransform } from '@angular/core';
import { NewUsers } from '../interfaces/newUsers';
import { HomeComponent } from '../pages/home.component';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  constructor(private home: HomeComponent){}

  transform(user: NewUsers[], orderBy: string ): NewUsers[] {

    switch (orderBy) {
      case '':
        return this.home.originalUsr
      case 'reset':
        return user.sort((a,b) => (a.country<b.country) ? 1:-1)
      case 'country':
        return user.sort((a,b) => (a.country>b.country) ? 1:-1)
      default:
        return user
    }

  }

}
