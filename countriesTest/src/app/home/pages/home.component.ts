import { Component } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';
import { NewUsers } from '../interfaces/newUsers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  columnsName: string[] = ['image','name','surname','country','delete']
  newUser: NewUsers[] = []
  originalUsr: NewUsers[] = []

  show: boolean = false
  order:boolean = false
  orderBy: string = ''


  
  constructor(private rUsers: RandomUserService) {
    this.rUsers.getUsers().subscribe(resp=>{
      
      resp.results.map(result =>{
        let users = {
          image: result.picture.thumbnail,
          name: result.name.first,
          surname: result.name.last,
          country: result.location.country
        }
        this.originalUsr.push(users)
      })
      this.newUser = [...this.originalUsr]
    })
  }

  viewColor(){
    this.show = !this.show
  }

  changeColor(i: number){
    if(this.show){
      return i%2==0 ? 'color1':'color2'
    }else{
      return ''
    }
  }

  sortCountry(){
    this.order = !this.order
    this.order ? this.orderBy = 'country': this.orderBy = 'reset'
  }

  restore(){
    this.newUser = [...this.originalUsr]
    this.orderBy = ''
  }

  killUser(i:number){
    this.newUser.splice(i,1)
  }

}
