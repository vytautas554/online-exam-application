import { Component, OnInit } from "@angular/core";
import { RegisterUser } from "src/app/shared/dto/registerUser.model";
import { User } from "src/app/shared/dto/user.model";
import { ApiService } from "src/app/shared/services/questions/api.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  formInput: RegisterUser = {
    name: "",
    email: "",
    userName: "",
    password: "",
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  registerUser(form: any) {
    const name = form.controls.name.value ?? "";
    const email = form.controls.email.value ?? "";
    const userName = form.controls.userName.value ?? "";
    const password = form.controls.password.value ?? "";
    const postData = { name, email, userName, password };

    this.apiService.postUser(postData).subscribe(
      (res) => {
        alert("User added");
        console.log(res);
        form.reset();
      },
      (err) => {
        alert("Unable add user");
        console.log(err);
      }
    );
  }
}
