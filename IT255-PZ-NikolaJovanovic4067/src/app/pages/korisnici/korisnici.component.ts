import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { GetUsers } from 'src/app/store/actions/user.action';
import { selectedUsers } from 'src/app/store/selector/user.selector';
import { UserState } from 'src/app/store/state/user.state';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html'
})
export class KorisniciComponent implements OnInit {


  public users$: Observable<User[]>;
  public users: User[];

  constructor(private _store: Store<UserState>, private user_service: UserService, private _router: Router) {
    this.users$ = this._store.pipe(select(selectedUsers));
    this.users$.subscribe(val => {
      this.users = JSON.parse(JSON.stringify(val));
    })
  }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }
}