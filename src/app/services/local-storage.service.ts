import { Injectable } from '@angular/core';

import { ITask } from '../models/task.interface';
import { IMarkState } from '../store/state/mark.state';

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

  getMarks(): IMarkState {
    return JSON?.parse(
      localStorage.getItem('marks') ||
        `
        {
          "total": 0,
          "sections": [],
          "marks": [
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
          ]
        }
      `
    );
  }

  setMark(marks: IMarkState): void {
    return localStorage.setItem('marks', JSON.stringify(marks));
  }
}
