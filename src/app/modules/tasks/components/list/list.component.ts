import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, Observable, of, tap } from 'rxjs';
import { ISection } from 'src/app/models/section.interface';
import { ITask } from 'src/app/models/task.interface';
import { StoreService } from 'src/app/services/store.service';
import { ESortType, filterTasks, IMenu, sortMenu, sortTasks } from 'src/const';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  tasks$!: Observable<ITask[]>;
  sections$: Observable<ISection[]> = of([]);

  sortMenu: IMenu[] = sortMenu;
  useDragDrop: boolean = false;
  adding: boolean = false;
  total: number = 0;

  constructor(
    private router: Router,
    private ss: StoreService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tasks$ = combineLatest([
      this.ss.getTasks(),
      this.activatedRoute.queryParams,
    ]).pipe(
      map(([tasks, params]) => {
        this.useDragDrop = !params.sort;

        return [
          ...sortTasks(filterTasks([...tasks], params.deadline), params.sort),
        ];
      }),
      tap((tasks) => (this.total = tasks?.length))
    );

    this.sections$ = this.ss.getSections();
  }

  updateQueryParams(key: string, type: ESortType): void {
    this.router.navigate([], {
      queryParams: { [key]: type },
      queryParamsHandling: 'merge',
    });
  }

  drop(event: CdkDragDrop<any>, array: ITask[]) {
    moveItemInArray(array, event.previousIndex, event.currentIndex);
    this.ss.setTasks(array);
  }

  setAdding(status: boolean): void {
    this.adding = status;
  }
}
