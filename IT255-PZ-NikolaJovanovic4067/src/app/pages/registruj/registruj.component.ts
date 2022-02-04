import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registruj',
  templateUrl: './registruj.component.html'
})
export class RegistrujComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    password: '',
    ime: '',
    prezime: '',
    email: '',
    admin: 0
  };
  constructor(private user_service: UserService, private router: Router) {

  }

  addUser(formObj: User) {

    alert("Uspjesno ste se registrovali");
    this.user_service.addUserr(formObj).subscribe((response) => {
      this.router.navigate(['/login']);
    })

  }

  ngOnInit(): void {
  }



}
