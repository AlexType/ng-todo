import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { ITask } from 'src/app/models/task.interface';
import { AddTask, UpdateTask } from 'src/app/store/actions/task.actions';
import { selectTaskList } from 'src/app/store/selectors/task.selector';
import { IAppState } from 'src/app/store/state/_app.state';
import { checkDeadline } from 'src/const';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTaskComponent {
  @Input() id: string | undefined;
  @Output() approve = new EventEmitter<void>();

  form!: FormGroup;
  task: ITask | undefined;

  checkDeadline = checkDeadline;

  constructor(private fb: FormBuilder, private store$: Store<IAppState>) {}

  ngOnInit(): void {
    if (this.id) {
      this.store$.select(selectTaskList).subscribe((task) => {
        this.task = task.find((t) => t.id === this.id);
      });
    }

    this.form = this.fb.group({
      content: [this.task?.content || ''],
      type: [this.task?.type || null],
      deadlineAt: [
        this.task?.deadlineAt
          ? DateTime.fromSeconds(this.task.deadlineAt).toJSDate()
          : null,
      ],
      checked: [this.task?.checked || false, Validators.required],
      title: [this.task?.title || '', [Validators.required, Validators.min(1)]],
    });
  }

  cancel(): void {
    this.approve.emit();
  }

  add(): void {
    this.task = {
      ...this.task,
      ...this.form.value,
      id: uuidv4(),
      createdAt: DateTime.now().toSeconds(),
      updatedAt: DateTime.now().toSeconds(),
      deadlineAt: this.form.value.deadlineAt
        ? DateTime.fromJSDate(this.form.value.deadlineAt).toSeconds()
        : null,
    };

    if (this.task) {
      this.store$.dispatch(new AddTask(this.task));
    }

    this.approve.emit();
  }

  save(): void {
    this.task = {
      ...this.task,
      ...this.form.value,
      updatedAt: new Date().getTime(),
    };

    if (this.task) {
      this.store$.dispatch(new UpdateTask(this.task));
    }

    this.approve.emit();
  }
}
