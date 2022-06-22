import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUserService } from 'src/app/services/random-user.service';
import { NewUsers } from '../interfaces/newUsers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  columnsName: string[] = ['image','name','surname','country','delete']
  originalUsr: NewUsers[] = []
  newUser    : NewUsers[] = []
  
  isLoading:boolean = false
  isShow   : boolean = false
  isOrder  :boolean = false

  orderBy: string = ''
  msgErr : string = ''


  
  constructor(private rUsers: RandomUserService, private router: Router) {
    this.rUsers.getUsers().subscribe(resp=>{
      if(this.originalUsr.length <= 0){
        this.isLoading = true
      }
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
    }, err => {
      router.navigate(['Error404'])
    })
  }

  viewColor(){
    this.isShow = !this.isShow
  }

  changeColor(i: number){
    if(this.isShow) return i%2==0 ? 'color1':'color2';
    return
  }

  sortCountry(){
    this.isOrder = !this.isOrder
    this.isOrder ? this.orderBy = 'country': this.orderBy = 'reset'
  }

  restore(){
    this.newUser = [...this.originalUsr]
    this.orderBy = ''
  }

  killUser(i:number){
    this.newUser.splice(i,1)
  }

}
