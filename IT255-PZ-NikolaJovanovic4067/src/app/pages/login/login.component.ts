import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  logIn() {
    this._http.get<User[]>('http://localhost:3000/user').subscribe(res => {
      const user = res.find((a: User) => {
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      })

      if (user) {
        alert("Login je uspjesan");
        this.userService.prijavljen = user;
        this.loginForm.reset();
        this.router.navigate(['/pocetna'])
      } else {
        alert('User Not found')
      }
    }, err => {
      alert('Server side 0')
    }
    )
  }

  logOut() {
    this.userService.prijavljen = {}
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;

    this.userService.getUser(username, password).subscribe((users) => {
      if (users.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        this.router.navigate(['/']);
      } else {
        window.alert('Wrong username/password');
      }
    });
  }
}
