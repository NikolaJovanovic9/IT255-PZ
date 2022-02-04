import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  user: User = {};
  constructor(private router: Router, private userService: UserService) {
    this.user = this.userService.prijavljen;
  }

  logOut() {
    this.userService.prijavljen = {}
    this.user = {}
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
