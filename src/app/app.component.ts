import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LocalStorageService } from './services/local-storage.service';
import { GetMarks } from './store/actions/mark.actions';
import { GetTasks } from './store/actions/task.actions';
import { IAppState } from './store/state/_app.state';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(
    private ls: LocalStorageService,
    private store$: Store<IAppState>
  ) {}

  ngOnInit() {
    this.store$.dispatch(new GetTasks(this.ls.getTasks()));
    this.store$.dispatch(new GetMarks({ marks: this.ls.getMarks() }));
  }
}
