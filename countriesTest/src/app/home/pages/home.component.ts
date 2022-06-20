import { Component, OnInit } from '@angular/core';
import { RandomUserService } from 'src/app/services/random-user.service';
import { NewUsers } from '../interfaces/newUsers';
import { Name } from '../interfaces/randomUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columnsName: string[] = [
    'image',
    'name',
    'surname',
    'country',
    'delete',
  ]

  newUser: NewUsers[] = []
  


  constructor(private rUsers: RandomUserService) { }

  ngOnInit(): void {
    this.rUsers.getUsers().subscribe(resp=>{
      
      resp.results.map(result =>{
        let users = {
          img: result.picture.thumbnail,
          name: result.name.first,
          surname: result.name.last,
          country: result.location.country
        }
        this.newUser.push(users)
      })
    })
    console.log(this.newUser)
    
  }

}
