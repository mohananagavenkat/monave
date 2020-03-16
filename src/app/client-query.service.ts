import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { QueryModel } from './models/query.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class ClientQueryService {

  clientQueryCollection;
  previousQuries:Observable<any>;

  constructor(private db:AngularFireDatabase) {
    this.clientQueryCollection = this.db.list('/clientquries');
    this.previousQuries = this.clientQueryCollection.valueChanges();
  }

  public store(data){
    this.clientQueryCollection.push(data);
  }

}
