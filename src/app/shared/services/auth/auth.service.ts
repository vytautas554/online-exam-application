import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../../dto/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {}

  Login(userName: string, password: string) {
    // if(userName !== undefined && userName !== null && password !== undefined && password!== null){

    // }
    return this.http.get<User>("http://localhost:3000/users").pipe(
      map((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }
}
