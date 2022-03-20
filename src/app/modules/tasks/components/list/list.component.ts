import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectTaskState } from 'src/app/store/selectors/task.selector';
import { IAppState } from 'src/app/store/state/_app.state';
import { ITaskState } from 'src/app/store/state/task.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  taskState$!: Observable<ITaskState>;
  adding: boolean = false;

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.taskState$ = this.store$.select(selectTaskState).pipe(
      map((state) => ({
        ...state,
        tasks: [...state.tasks].sort((a, b) => b.createdAt - a.createdAt),
      }))
    );
  }

  setAdding(status: boolean): void {
    this.adding = status;
  }
}
