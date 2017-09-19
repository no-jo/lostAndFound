import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from '../enitities/user';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private usersUrl = 'http://localhost:8080/user';

  constructor(private http: Http) { }

  getAll(): Observable<User[]> {
    return this.http.get(this.usersUrl + '/').map(data => data.json());
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/id?id=${id}`;
    return this.http.get(url).map(data => data.json());
  }

  getUsersBy(searchCond: User): Observable<User[]> {
    const url = `${this.usersUrl}/`;
    return this.http
    .post(url, JSON.stringify(searchCond), { headers: this.headers })
    .map(data => data.json());
  }

  delete(user: User): Observable<User> {
    const url = `${this.usersUrl}/id?id=${user.id}`;
    return this.http
      .delete(url)
      .map(data => data.json());
  }

  update(user: User): Observable<User> {
    const url = `${this.usersUrl}/id`;
    return this.http
        .post(url, JSON.stringify(user), { headers: this.headers })
        .map(data => data.json());
  }

  createUser(newUser: User): Observable<User> {
    const url = `${this.usersUrl}/id`;
    return this.http
        .put(url, JSON.stringify(newUser), { headers: this.headers })
        .map(data => data.json());
  }

  getUserQueueBy(itemId: number): Observable<User[]> {
    const url = `${this.usersUrl}/item?id=${itemId}`;
    return this.http.get(url).map(data => data.json());
  }
}
