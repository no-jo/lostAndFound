import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Item } from '../enitities/item';
import { ItemSearchCriteria } from '../enitities/item-search-criteria';

@Injectable()
export class MetadataService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private itemsUrl = 'http://localhost:8080/meta';

  constructor(private http: Http) { }

  getItemSizes(): Observable<string[]> {
    return this.http.get(this.itemsUrl + '/size').map(data => data.json());
  }

  getRequestStatuses(): Observable<string[]> {
     return this.http.get(this.itemsUrl + '/status').map(data => data.json());
  }

}