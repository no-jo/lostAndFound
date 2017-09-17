import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Request } from '../enitities/Request';

@Injectable()
export class RequestService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private itemsUrl = 'http://localhost:8080/request';

  constructor(private http: Http) { }

  getAll(): Observable<Request[]> {
    return this.http.get(this.itemsUrl + '/').map(data => data.json());
  }

  getRequest(id: number): Observable<Request> {
    const url = `${this.itemsUrl}/id?id=${id}`;
    return this.http.get(url).map(data => data.json());
  }

  getRequestsBy(userId: number): Observable<Request[]> {
    const url = `${this.itemsUrl}/`;
    return this.http
    .post(url, JSON.stringify(userId), { headers: this.headers })
    .map(data => data.json());
  }

  delete(req: Request): Observable<Request> {
    const url = `${this.itemsUrl}/id?id=${req.id}`;
    return this.http
      .delete(url)
      .map(data => data.json());
  }

  create(newReq: Request): Observable<Request> {
    const url = `${this.itemsUrl}/id`;
    return this.http
      .put(url, JSON.stringify(newReq), { headers: this.headers })
      .map(data => data.json());
  }
}