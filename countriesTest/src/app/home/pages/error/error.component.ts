import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private rUser: RandomUserService, private router:Router) { }

  ngOnInit(): void {
    this.rUser.getUsers().subscribe(res =>{
      this.router.navigate([''])
    })
  }

}
