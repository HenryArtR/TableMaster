import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomUsers } from '../home/interfaces/randomUser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<RandomUsers>{
    return this.http.get<RandomUsers>(`${environment.randomUser}`)
  }

}
