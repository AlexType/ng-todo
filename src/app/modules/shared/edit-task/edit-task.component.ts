import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, of } from 'rxjs';
import { IMark } from 'src/app/models/mark.interface';
import { ITask } from 'src/app/models/task.interface';
import { AddMark } from 'src/app/store/actions/mark.actions';
import { AddTask, UpdateTask } from 'src/app/store/actions/task.actions';
import { selectMarkList } from 'src/app/store/selectors/mark.selector';
import { selectTaskList } from 'src/app/store/selectors/task.selector';
import { IAppState } from 'src/app/store/state/_app.state';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTaskComponent implements OnInit, AfterViewInit {
  @Input() id: string | undefined;
  @Output() approve = new EventEmitter<void>();

  @ViewChild('titleRef') titleRef!: ElementRef<HTMLTextAreaElement>;

  form!: FormGroup;
  task: ITask | undefined;
  marks$: Observable<IMark[]> = of([]);

  constructor(
    private fb: FormBuilder,
    private store$: Store<IAppState>,
    private messageService: NzMessageService
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.store$.select(selectTaskList).subscribe((task) => {
        this.task = task.find((t) => t.id === this.id);
      });
    }

    this.marks$ = this.store$.select(selectMarkList);

    this.form = this.fb.group({
      content: [this.task?.content || ''],
      markId: [this.task?.markId || null],
      deadlineAt: [
        this.task?.deadlineAt
          ? DateTime.fromSeconds(this.task.deadlineAt).toJSDate()
          : null,
      ],
      checked: [this.task?.checked || false, Validators.required],
      title: [this.task?.title || '', [Validators.required, Validators.min(1)]],
    });
    console.log(this.titleRef);
  }

  ngAfterViewInit(): void {
    this.titleRef.nativeElement.focus();
  }

  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
        if (event.key === 'Enter') {
          if (this.id) {
            this.updateTask();
          } else {
            this.addNewTask();
          }
        }
        break;

      case 'Escape':
        this.cancel();
        break;
    }
  }

  addNewMark(input: HTMLInputElement): void {
    this.store$.dispatch(
      new AddMark({
        mark: {
          id: uuidv4(),
          title: input.value,
        },
      })
    );
  }

  cancel(): void {
    this.approve.emit();
  }

  addNewTask(): void {
    this.task = {
      ...this.task,
      ...this.form.value,
      id: uuidv4(),
      createdAt: DateTime.now().toMillis(),
      updatedAt: DateTime.now().toMillis(),
      deadlineAt: this.form.value.deadlineAt
        ? DateTime.fromJSDate(this.form.value.deadlineAt).toMillis()
        : null,
    };

    if (this.task) {
      this.store$.dispatch(new AddTask(this.task));
      this.messageService.success('Задача создана', { nzDuration: 1300 });
      this.approve.emit();
    }
  }

  updateTask(): void {
    this.task = {
      ...this.task,
      ...this.form.value,
      deadlineAt: this.form.value.deadlineAt
        ? DateTime.fromJSDate(this.form.value.deadlineAt).toMillis()
        : null,
      updatedAt: new Date().getTime(),
    };

    if (this.task) {
      this.store$.dispatch(new UpdateTask(this.task));
      this.messageService.success('Задача обновлена', { nzDuration: 1300 });
    }

    this.approve.emit();
  }
}
