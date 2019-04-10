import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QuerySnapshot, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService) {
   this.tasks = this.taskService.getAll();
  }

  ngOnInit() {
  }

}
