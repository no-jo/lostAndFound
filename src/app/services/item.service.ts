import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Item } from '../enitities/item';

@Injectable()
export class ItemService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private itemsUrl = 'http://localhost:8080/item';

  constructor(private http: Http) { }

  getLostItems(): Observable<Item[]> {
    return this.http.get(this.itemsUrl + '/lost').map(data => data.json());
  }

  getFoundItems(): Observable<Item[]> {
    return this.http.get(this.itemsUrl + '/found').map(data => data.json());
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/id?id=${id}`;
    return this.http.get(url).map(data => data.json());
  }

  getItemsBy(name: string, lostDate: Date, foundDate: Date): Promise<Item[]> {
    const url = `${this.itemsUrl}/?lostDate=${lostDate}&foundDate=${foundDate}&name=${name}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Item[])
    .catch(this.handleError);
  }

  delete(item: Item): Observable<Item> {
    const url = `${this.itemsUrl}/id?id=${item.id}`;
    return this.http
      .delete(url)
      .map(data => data.json());
  }

  createLost(newItem: Item): Observable<Item> {
    const url = `${this.itemsUrl}/id`;
    return this.http
      .put(url, JSON.stringify(newItem), { headers: this.headers })
      .map(data => data.json());
  }

  createFound(name: string, foundDate: Date): Promise<Item> {
    return this.http
      .post(this.itemsUrl, JSON.stringify({ name: name, foundDate: foundDate, found: true }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Item)
      .catch(this.handleError);
  }

  update(item: Item): Promise<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http
      .put(url, {body: JSON.stringify(item)}, { headers: this.headers })
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
