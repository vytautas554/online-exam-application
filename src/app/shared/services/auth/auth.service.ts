import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  Login() {
    return this.http.get<any>("http://localhost:3000/users").pipe();
  }
}
