import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject } from "rxjs";
import { User } from "../shared/dto/user.model";
import { AuthService } from "../shared/services/auth/auth.service";
import { ApiService } from "../shared/services/api/api.service";

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

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.allUsers();
    console.log("Storage", this.storage);
  }

  tryLogin(form: any) {
    const userName = form.controls.userName.value ?? "";
    const password = form.controls.password.value ?? "";

    this.authService.Login().subscribe(
      (res) => {
        const user = res.find((x: any) => {
          return x.userName === userName && x.password === password;
        });
        if (user) {
          this.toastr.success("Welcome to online exam", user.userName);
          this.router.navigate(["/home"]);
        } else {
          this.toastr.error("Bad username or password");
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
}
