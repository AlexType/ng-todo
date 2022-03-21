import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ITask } from 'src/app/models/task.interface';
import { selectTaskList } from 'src/app/store/selectors/task.selector';
import { IAppState } from 'src/app/store/state/_app.state';

@Component({
  selector: 'app-task-view-modal',
  templateUrl: './task-view-modal.component.html',
  styleUrls: ['./task-view-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskViewModalComponent {
  @Input() id!: string;

  task$!: Observable<ITask | undefined>;

  constructor(private store$: Store<IAppState>) {
    this.task$ = this.store$
      .select(selectTaskList)
      .pipe(map((tasks) => tasks.find((t) => t.id === this.id)));
  }
}
