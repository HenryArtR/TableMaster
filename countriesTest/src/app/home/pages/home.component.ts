import { Component, ElementRef, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';
import { NewUsers } from '../interfaces/newUsers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columnsName: string[] = ['image','name','surname','country']
  newUser: NewUsers[] = []

  show: boolean = false


  
  constructor(private rUsers: RandomUserService) { }

  ngOnInit(): void {
    this.rUsers.getUsers().subscribe(resp=>{
      
      resp.results.map(result =>{
        let users = {
          image: result.picture.thumbnail,
          name: result.name.first,
          surname: result.name.last,
          country: result.location.country
        }
        this.newUser.push(users)
      })
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

  }
  restore(){

  }

}
