import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Question } from "src/app/shared/dto/question.model";
import { map } from "rxjs/operators";
import { User } from "../../dto/user.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get<Question>("http://localhost:3000/questions").pipe(
      map((x) => {
        return x;
      })
    );
  }

  getUsers() {
    return this.http.get<User>("http://localhost:3000/users").pipe(
      map((x) => {
        return x;
      })
    );
  }
}
