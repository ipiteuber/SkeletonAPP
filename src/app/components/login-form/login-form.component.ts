import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: false
})
export class LoginFormComponent implements OnInit {
  data = {
    user: '',
    pwd: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  // Validacion user
  isUserInvalid(): boolean {
    return this.data.user.length > 0 && !/^[a-zA-Z0-9]{3,8}$/.test(this.data.user);
  }

  // Validacion contrasena
  isPwdInvalid(): boolean {
    return this.data.pwd.length > 0 && !/^\d{4}$/.test(this.data.pwd);
  }

  login() {
    if (this.isUserInvalid() || this.isPwdInvalid()) {
      alert('User: 3-8 alphanumeric characters.\nPassword: 4 numeric digits.');
      return;
    }

    const navExtras: NavigationExtras = {
      state: {
        user: this.data.user,
        pwd: this.data.pwd
      }
    };

    this.router.navigate(['/home'], navExtras);
  }
}
