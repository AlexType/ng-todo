import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { selectTaskState } from 'src/app/store/selectors/task.selector';
import { IAppState } from 'src/app/store/state/_app.state';
import { ITaskState } from 'src/app/store/state/task.state';
import { ESortType, filterTasks, IMenu, sortMenu, sortTasks } from 'src/const';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  taskState$!: Observable<ITaskState>;
  sortMenu: IMenu[] = sortMenu;
  adding: boolean = false;
  total: number = 0;

  constructor(
    private router: Router,
    private store$: Store<IAppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.taskState$ = combineLatest([
      this.store$.select(selectTaskState),
      this.activatedRoute.queryParams,
    ]).pipe(
      map(([state, params]) => ({
        ...state,
        tasks: sortTasks(
          filterTasks([...state.tasks], params.deadline),
          params.sort
        ),
      })),
      tap(({ tasks }) => (this.total = tasks?.length))
    );
  }

  setAdding(status: boolean): void {
    this.adding = status;
  }

  updateQueryParams(key: string, type: ESortType): void {
    this.router.navigate([], {
      queryParams: {
        [key]: type,
      },
      queryParamsHandling: 'merge',
    });
  }
}
