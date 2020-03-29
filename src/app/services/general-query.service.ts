import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../assets/config/config';

@Injectable({
  providedIn: 'root'
})
export class GeneralQueryService {

  generalQueryCollection;
  previousQuries: Observable<any>;

  constructor(private db: AngularFireDatabase, private http:HttpClient) {
    this.generalQueryCollection = this.db.list('/generalquries');
    this.previousQuries = this.generalQueryCollection.valueChanges();
  }

  public store(data){
    this.generalQueryCollection.push(data);
    return this.sendEmail(data);
  }

  public sendEmail(data){
    return this.http.post(`${appConfig.api}/general-query`,data);
  }

}
