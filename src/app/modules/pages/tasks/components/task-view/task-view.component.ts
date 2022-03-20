import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { ITask } from 'src/app/models/task.interface';
import { UpdateTask } from 'src/app/store/actions/task.actions';
import { IAppState } from 'src/app/store/state/_app.state';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskViewComponent implements OnInit, OnDestroy {
  @Input() task!: ITask;

  form!: FormGroup;
  isEditing: boolean = false;

  constructor(private fb: FormBuilder, private store$: Store<IAppState>) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      checked: [this.task?.checked, Validators.required],
      deadlineAt: [
        this.task?.deadlineAt
          ? DateTime.fromSeconds(this.task?.deadlineAt).toJSDate()
          : null,
      ],
    });
  }

  ngOnDestroy(): void {
    this.store$.dispatch(
      new UpdateTask({
        ...this.task,
        checked: this.form.value.checked,
        deadlineAt: this.form.value.deadlineAt
          ? DateTime.fromJSDate(this.form.value.deadlineAt).toSeconds()
          : null,
      })
    );
  }

  setIsEditing(status: boolean): void {
    this.isEditing = status;
  }
}
