import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { QueryModel } from './models/query.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class ClientQueryService {

  queryDocument;
  previousQuries:Observable<any>;

  constructor(private db:AngularFireDatabase) {
    this.queryDocument = this.db.list('/clientquries');
    this.previousQuries = this.queryDocument.valueChanges();
  }

  public store(data){
    this.queryDocument.push(data);
  }

}
