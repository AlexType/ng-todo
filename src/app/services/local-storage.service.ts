import { Injectable } from '@angular/core';

import { IMark } from '../models/mark.interface';
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

  getMarks(): IMark[] {
    return JSON?.parse(
      localStorage.getItem('marks') ||
        `[
          {
            "id": "0",
            "title": "Входящие",
            "icon": {
              "type": "inbox",
              "color": "#246fe0"
            }
          },
          {
            "id": "2",
            "title": "Добро пожаловать"
          }
        ]`
    );
  }

  setMark(marks: IMark[]): void {
    return localStorage.setItem('marks', JSON.stringify(marks));
  }
}
