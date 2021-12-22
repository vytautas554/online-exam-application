import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "../shared/dto/user.model";
import { AuthService } from "../shared/services/auth/auth.service";
import { ApiService } from "../shared/services/questions/api.service";

export const TokenHeaderName = "OnlineExamToken";
export const SessionHeaderName = "OnlineExamSession";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  private storage = window.localStorage;

  formInput: User = {
    userName: "",
    password: "",
  };

  // private session: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(this.SavedSession);

  constructor(private apiService: ApiService, private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  // private get SavedSession(): User | null {
  //   const savedSessionJSON = this.storage.getItem(SessionHeaderName as string);
  //   if (savedSessionJSON && savedSessionJSON.length > 0) {
  //     const savedSession = JSON.parse(savedSessionJSON) as User;
  //     if (savedSession) {
  //       return savedSession;
  //     }
  //   }
  //   return null;
  // }

  ngOnInit() {
    this.allUsers();
    console.log("Storage", this.storage);
  }

  // private set NewSession(session: User | null) {
  //   this.session.next(session);
  // }

  // private set SaveSession(session: User) {
  //   this.storage.setItem(SessionHeaderName as string, JSON.stringify(session));
  // }

  tryLogin(form: any) {
    const userName = form.controls.userName.value ?? "";
    const password = form.controls.password.value ?? "";

    this.authService.Login().subscribe(
      (res) => {
        const user = res.find((x: any) => {
          return x.userName === userName && x.password === password;
        });
        if (user) {
          alert("Login success");
          this.router.navigate(["/home"]);
          // this.NewSession = res;
          // this.SaveSession = res;
        } else {
          alert("user not found");
        }
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  allUsers() {
    this.apiService.getUsers().subscribe((x) => {
      console.log("Users:", x);
    });
  }

  checkUser() {
    this.apiService.getUsers().subscribe((x) => {});
  }

  // LogOut() {
  //   this.NewSession = null;
  //   this.storage.removeItem(TokenHeaderName);
  //   this.storage.clear();
  // }
}
