import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ITask } from 'src/app/models/task.interface';
import { RemoveTask, UpdateTask } from 'src/app/store/actions/task.actions';
import { IAppState } from 'src/app/store/state/_app.state';

import { TaskViewComponent } from '../task-view/task-view.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit, OnDestroy {
  @Input() task!: ITask;

  form!: FormGroup;
  isEditing: boolean = false;
  createTaskViewDialogRef: DynamicDialogRef | undefined;

  constructor(
    private fb: FormBuilder,
    private store$: Store<IAppState>,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      checked: [this.task?.checked, Validators.required],
      deadlineAt: [
        this.task?.deadlineAt
          ? DateTime.fromSeconds(this.task?.deadlineAt).toJSDate()
          : null,
      ],
    });

    this.form.valueChanges.subscribe((form) => {
      this.store$.dispatch(
        new UpdateTask({
          ...this.task,
          checked: form.checked,
          deadlineAt: form.deadlineAt
            ? DateTime.fromJSDate(form.deadlineAt).toSeconds()
            : null,
        })
      );
    });
  }

  ngOnDestroy() {
    this.destroyDialog();
  }

  openDialog(): void {
    this.destroyDialog();

    this.createTaskViewDialogRef = this.dialogService.open(TaskViewComponent, {
      header: this.task.id,
      width: '620px',
      modal: true,
      baseZIndex: 4000,
      dismissableMask: true,
      data: {
        task: this.task,
      },
    });
  }

  destroyDialog(): void {
    this.createTaskViewDialogRef?.destroy();
  }

  removeTask(): void {
    this.store$.dispatch(new RemoveTask(this.task.id));
  }

  setIsEditing(status: boolean): void {
    this.isEditing = status;
  }
}
