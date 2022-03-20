import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Observable } from 'rxjs';
import { IMark } from 'src/app/models/mark.interface';
import { ITask } from 'src/app/models/task.interface';
import { RemoveTask, UpdateTask } from 'src/app/store/actions/task.actions';
import { selectMarkList } from 'src/app/store/selectors/mark.selector';
import { IAppState } from 'src/app/store/state/_app.state';

import { TaskViewComponent } from '../task-view/task-view.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @Input() task!: ITask;
  @Input() isRoot: boolean = true;

  form!: FormGroup;
  isEditing: boolean = false;
  mark$!: Observable<IMark | undefined>;

  constructor(
    private fb: FormBuilder,
    private store$: Store<IAppState>,
    private modalService: NzModalService,
    private messageService: NzMessageService
  ) {}

  ngOnInit(): void {
    console.log(this.task);

    this.mark$ = this.store$
      .select(selectMarkList)
      .pipe(map((marks) => marks.find((m) => m.id === this.task.markId)));

    this.form = this.fb.group({
      checked: [this.task?.checked, Validators.required],
      deadlineAt: [
        this.task?.deadlineAt
          ? DateTime.fromMillis(this.task?.deadlineAt).toJSDate()
          : null,
      ],
    });

    this.form.valueChanges.subscribe((form) => {
      this.store$.dispatch(
        new UpdateTask({
          ...this.task,
          checked: form.checked,
          updatedAt: DateTime.now().toMillis(),
          deadlineAt: form.deadlineAt
            ? DateTime.fromJSDate(form.deadlineAt).toMillis()
            : null,
        })
      );
    });
  }

  createTaskViewModal(): void {
    if (this.isRoot) {
      this.modalService.create({
        nzContent: TaskViewComponent,
        nzFooter: null,
        nzWidth: '620px',
        nzComponentParams: {
          id: this.task.id,
        },
      });
    }
  }

  removeTask(): void {
    this.store$.dispatch(new RemoveTask(this.task.id));
    this.messageService.info('Задача удалена', {
      nzDuration: 1300,
    });
  }

  setIsEditing(status: boolean): void {
    this.isEditing = status;
  }
}

// this.data$ = this.store$.select(selectTaskList).pipe(
//   map((tasks) => tasks.find((t) => t.id === this.id)),
//   mergeMap((task) =>
//     this.store$.select(selectMarkList).pipe(
//       map((marks) => ({
//         task: task as ITask,
//         mark: marks.find((m) => m.id === task?.markId),
//       }))
//     )
//   ),
//   tap(({ task }) => {
//     this.deadline = task?.deadlineAt
//       ? checkDeadline(task?.deadlineAt)
//       : null;
//   })
// );
