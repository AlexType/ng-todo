import { Injectable } from '@angular/core';

import { ITask } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getTasks(): ITask[] {
    return JSON?.parse(localStorage.getItem('tasks') || '[]');
  }

  setTask(tasks: ITask[]): void {
    return localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
