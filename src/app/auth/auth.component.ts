import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../shared/dto/user.model";
import { AuthService } from "../shared/services/auth/auth.service";
import { ApiService } from "../shared/services/questions/api.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  formInput: User = {
    userName: "",
    password: "",
  };

  constructor(private apiService: ApiService, private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.allUsers();
  }

  tryLogin(form: any) {
    const userName = form.controls.userName.value ?? "";
    const password = form.controls.password.value ?? "";

    this.authService
      .Login(userName, password)
      .pipe()
      .subscribe(
        () => {
          this.router.navigateByUrl("/home");
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
