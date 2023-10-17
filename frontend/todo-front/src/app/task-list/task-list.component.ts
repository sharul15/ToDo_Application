import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../app.interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.fragment
      .pipe(
        switchMap((fragment) => {
          let params = new HttpParams();
          switch (fragment) {
            case 'overdue':
              params = params.set('overdue', true).set('is_completed', false);
              break;
            case 'finished':
              params = params.set('is_completed', true);
              break;
            case 'all':
              break;
            default:
              params = params.set('is_completed', false);
          }

          return this.http.get<Task[]>('http://localhost:8000/todo/tasks/', {
            params,
          });
        })
      )
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
  }

  toggleTaskCompleted(task: Task) {
    this.http
      .patch<Task>(`http://localhost:8000/todo/tasks/${task.id}/`, {
        is_completed: !task.is_completed,
      })
      .subscribe(
        (updatedTask) => {
          console.log(task);
          const taskIndex = this.tasks.findIndex(
            (t) => t.id === updatedTask.id
          );
          if (taskIndex !== -1) {
            this.tasks[taskIndex] = updatedTask;
          }
        },
        (error) => {
          alert('Failed to update the task. :(');
        }
      );
  }
}
