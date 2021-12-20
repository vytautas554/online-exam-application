import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.allUsers();
  }

  allUsers() {
    this.authService.getUsers().subscribe((x) => {
      console.log('Users:', x);
    });
  }

  checkUser() {
    this.authService.getUsers().subscribe((x) => {});
    this.router.navigateByUrl('/home');
  }
}
