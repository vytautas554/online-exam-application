import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
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
    role: "",
  };

  roles = [
    { id: 1, label: "Admin" },
    { id: 2, label: "Teacher" },
    { id: 1, label: "Student" },
  ];

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  registerUser(form: any) {
    const name = form.controls.name.value ?? "";
    const email = form.controls.email.value ?? "";
    const userName = form.controls.userName.value ?? "";
    const password = form.controls.password.value ?? "";
    const role = form.controls.role.value ?? "";
    const postData = { name, email, userName, password, role };

    this.apiService.postUser(postData).subscribe(
      (res) => {
        this.toastr.success(userName, "User added successfully");
        form.reset();
      },
      (err) => {
        this.toastr.error("can't add", userName);
        console.log(err);
      }
    );
  }
}
