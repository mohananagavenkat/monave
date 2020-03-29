import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { QueryModel } from '../models/query.model';
import { Observable } from 'rxjs';
import { appConfig } from '../../assets/config/config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn:'root'
})
export class ClientQueryService {

  clientQueryCollection;
  previousQuries:Observable<any>;

  constructor(private db:AngularFireDatabase,private http:HttpClient) {
    this.clientQueryCollection = this.db.list('/clientquries');
    this.previousQuries = this.clientQueryCollection.valueChanges();
  }

  public store(data){
    this.clientQueryCollection.push(data);
    return this.sendEmail(data);
  }

  public sendEmail(data){
    return this.http.post(`${appConfig.api}/client-query`,data);
  }

}
