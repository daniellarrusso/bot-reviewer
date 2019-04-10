import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Type } from '@angular/compiler';
import { Task } from '../model/task';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected db: AngularFirestore) { }

  getDocument<T>(path, id) {
    return this.db.doc(`${path}/${id}`) as unknown as T;
  }

  protected fireStoreCollection<T>(path: string) {
    return this.db.collection(path).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          return this.fireStoreMapFullObject(action) as T;
        });
      })
     );
  }

  private fireStoreMapFullObject<T>(action) {
    const data = action.payload.doc.data() as T;
    const id = action.payload.doc.id;
    return { id, ...data } as T;
  }
}
