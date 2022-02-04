import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { selectedUsers } from '../store/selector/user.selector';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url: string = 'http://localhost:3000/user';

  public prijavljen: User = {};

  public users$: Observable<User[]>;

  constructor(private _http: HttpClient, private _store: Store) {
    this.users$ = this._store.pipe(select(selectedUsers));
  }

  public fetchUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.url);
  }

  addUserr(user: User) {
    return this._http.post(this.url, user);
  }

  getUser(username: string, password: string) {
    const modUrl: string = `${this.url}?username=${username}&password=${password}`;
    return this._http.get<User[]>(modUrl);
  }

}

