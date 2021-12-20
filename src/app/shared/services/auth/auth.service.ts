import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../dto/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User>('http://localhost:3000/users').pipe(
      map((x) => {
        return x;
      })
    );
  }
}
