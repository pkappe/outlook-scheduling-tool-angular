import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { Room } from './room';

@Injectable
export Class RoomService {

  //public headers = new Headers({'Content-Type': 'application/json'});
  //private httpService: Http;
  private _url: string = "http://localhost:8080/assets"

  constructor (http: Http){
    this.httpService = http;
  }

  getRooms() {
    return this.http.get(this._url)
      .map((response:Response) => response.json());
  }
}
