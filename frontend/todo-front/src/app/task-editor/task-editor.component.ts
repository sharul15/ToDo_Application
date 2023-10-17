import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Task, TaskForm } from '../app.interfaces';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css'],
})
export class TaskEditorComponent {
  taskForm: TaskForm;
  validationErrors: { [key: string]: string[] } = {};

  constructor(private http: HttpClient) {
    this.taskForm = {
      id: null,
      title: '',
      description: '',
      is_completed: false,
      due_date: null,
    };
  }

  clearForm(): void {
    this.taskForm = {
      id: null,
      title: '',
      description: '',
      is_completed: false,
      due_date: null,
    };
    this.validationErrors = {};
  }

  onSubmit(): void {
    const taskData = { ...this.taskForm };
    delete taskData.id;

    if (this.taskForm.id === null) {
      this.http
        .post<Task>('http://localhost:8000/todo/tasks/', taskData)
        .subscribe(
          (response) => {
            alert('Task created successfully!!!');
            this.clearForm();
          },
          (error) => {
            if (error.status === 400) {
              this.validationErrors = error.error;
            } else {
              alert('Failed to create the task. :(');
            }
          }
        );
    } else {
      this.http
        .put<Task>(
          `http://localhost:8000/todo/tasks/${this.taskForm.id}/`,
          taskData
        )
        .subscribe(
          (response) => {
            alert('Task updated successfully!!!');
            this.clearForm();
          },
          (error) => {
            if (error.status === 400) {
              this.validationErrors = error.error;
            } else {
              alert('Failed to update the task. :(');
            }
          }
        );
    }
  }
}
