import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Observable } from 'rxjs';
import { IMark } from 'src/app/models/mark.interface';
import { ISection } from 'src/app/models/section.interface';
import { ITask } from 'src/app/models/task.interface';
import { RemoveTask, UpdateTask } from 'src/app/store/actions/task.actions';
import { selectMarkList, selectSectionsList } from 'src/app/store/selectors/mark.selector';
import { IAppState } from 'src/app/store/state/_app.state';
import { checkDeadline } from 'src/const';

import { TaskViewModalComponent } from '../modals/task-view-modal/task-view-modal.component';

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
  deadline: boolean = false;
  mark$!: Observable<IMark | undefined>;
  section$!: Observable<ISection | undefined>;

  constructor(
    private fb: FormBuilder,
    private store$: Store<IAppState>,
    private modalService: NzModalService,
    private messageService: NzMessageService
  ) {}

  ngOnInit(): void {
    if (this.task.deadlineAt) {
      this.deadline = checkDeadline(this.task.deadlineAt);
    }

    this.mark$ = this.store$
      .select(selectMarkList)
      .pipe(map((marks) => marks.find((m) => m.id === this.task?.markId)));

    this.section$ = this.store$
      .select(selectSectionsList)
      .pipe(
        map((section) => section.find((s) => s.id === this.task?.sectionId))
      );

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
        nzContent: TaskViewModalComponent,
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
