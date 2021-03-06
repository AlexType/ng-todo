import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { IMark } from '../models/mark.interface';
import { ISection } from '../models/section.interface';
import { ITask } from '../models/task.interface';
import { AddMark, AddSection, DeleteSection } from '../store/actions/mark.actions';
import { AddTask, GetTasks, RemoveTask, UpdateTask } from '../store/actions/task.actions';
import { selectMarkList, selectSectionsList } from '../store/selectors/mark.selector';
import { selectTaskList } from '../store/selectors/task.selector';
import { IAppState } from '../store/state/_app.state';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store$: Store<IAppState>) {}

  getMarks(): Observable<IMark[]> {
    return this.store$.select(selectMarkList);
  }

  getMark(id: string | null | undefined): Observable<IMark | undefined> {
    return this.store$
      .select(selectMarkList)
      .pipe(map((marks) => marks.find((m) => m.id === id)));
  }

  createMark(title: string): void {
    this.store$.dispatch(
      new AddMark({
        mark: {
          id: uuidv4(),
          title,
        },
      })
    );
  }

  getTasks(): Observable<ITask[]> {
    return this.store$.select(selectTaskList);
  }

  getTask(id: string): Observable<ITask | undefined> {
    return this.store$
      .select(selectTaskList)
      .pipe(map((task) => task.find((t) => t.id === id)));
  }

  createTask(task: ITask): void {
    this.store$.dispatch(new AddTask({ ...task, id: uuidv4() }));
  }

  updateTask(task: ITask): void {
    this.store$.dispatch(new UpdateTask(task));
  }

  removeTask(id: string): void {
    this.store$.dispatch(new RemoveTask(id));
  }

  setTasks(tasks: ITask[]): void {
    this.store$.dispatch(new GetTasks(tasks));
  }

  getSections(): Observable<ISection[]> {
    return this.store$.select(selectSectionsList);
  }

  getSection(id: string | null | undefined): Observable<ISection | undefined> {
    return this.store$
      .select(selectSectionsList)
      .pipe(map((section) => section.find((s) => s.id === id)));
  }

  createSection(title: string): void {
    this.store$.dispatch(
      new AddSection({
        section: { id: uuidv4(), title },
      })
    );
  }

  deleteSection(id: string): void {
    this.store$.dispatch(new DeleteSection({ id }));
  }
}
