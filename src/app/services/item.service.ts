import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from '../enitities/item';

@Injectable()
export class ItemService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private itemsUrl = 'api/items';

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)
      .toPromise()
      .then(response => response.json().data as Item[])
      .catch(this.handleError);
  }

  getItem(id: number): Promise<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Item)
      .catch(this.handleError);
  }

  getItemsBy(name: string, lostDate: Date, foundDate: Date): Promise<Item[]> {
    const url = `${this.itemsUrl}/?lostDate=${lostDate}&foundDate=${foundDate}&name=${name}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Item[])
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  createLost(name: string, lostDate: Date): Promise<Item> {
    return this.http
      .post(this.itemsUrl, JSON.stringify({ name: name, lostDate: lostDate, lost: true }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Item)
      .catch(this.handleError);
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
      .put(url, JSON.stringify(item), { headers: this.headers })
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
