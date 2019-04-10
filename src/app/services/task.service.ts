import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseService {
  tasks: AngularFirestoreCollection<Task>;
  taskDoc: AngularFirestoreDocument<Task>;
  path = '/tasks';

  constructor(public db: AngularFirestore) {
    super(db);
    this.tasks = db.collection(this.path);
   }

   getAll() {
     return this.fireStoreCollection(this.path) as Observable<Task[]>;
   }

   addTask(task) {
     this.tasks.add(task);
   }

   updateTask(id, update) {
     // get the task
     this.taskDoc = this.getDocument(this.path, id);
     this.taskDoc.update(update);
   }

   deleteTask(id) {
    this.taskDoc = this.getDocument(this.path, id);
    console.log(this.taskDoc);
    console.log(this.taskDoc.delete());
   }
}
