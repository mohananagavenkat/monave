import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralQueryService {

  generalQueryCollection;
  previousQuries: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.generalQueryCollection = this.db.list('/generalquries');
    this.previousQuries = this.generalQueryCollection.valueChanges();
  }

  public store(data){
    this.generalQueryCollection.push(data);
  }

}
