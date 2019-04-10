import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Observable<Task[]>;
  myTask: string;
  taskToEdit: Task;
  editMode: boolean;
  loading: boolean;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getAll();
  }

  ngOnInit() {
  }

  saveTask() {
    if (this.myTask != null) {
      const task = {
        description: this.myTask
      };
      if (!this.editMode) {
        console.log(task);
        this.taskService.addTask(task);
      } else {
        // get task Id
        const taskId = this.taskToEdit.id;
        this.taskService.updateTask(taskId, task);
      }
      this.editMode = false;
      this.myTask = '';
    }
  }

  deleteTask(task: Task) {
    const taskId = task.id;
    console.log(task);
    this.taskService.deleteTask(taskId);
  }

  edit(task: Task) {
    this.taskToEdit = task;
    this.editMode = true;
    this.myTask = task.description;
  }

}
