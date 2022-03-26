import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map, Observable, of, Subject, takeUntil } from 'rxjs';
import { ITask } from 'src/app/models/task.interface';
import { StoreService } from 'src/app/services/store.service';

import { IOption } from '../select-icon/select-icon.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTaskComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() id: string | undefined;
  @Output() approve = new EventEmitter<void>();
  @ViewChild('titleRef') titleRef!: ElementRef<HTMLTextAreaElement>;

  form!: FormGroup;
  task: ITask | undefined;
  markOptions$: Observable<IOption[]> = of([]);
  sectionOptions$: Observable<IOption[]> = of([]);

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private ss: StoreService,
    private messageService: NzMessageService
  ) {
    this.form = this.fb.group({
      content: [''],
      markId: [null],
      sectionId: [null],
      deadlineAt: [null],
      checked: [false, Validators.required],
      title: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.markOptions$ = this.ss.getMarks().pipe(
      map((mark) =>
        mark.map((m) => ({
          label: m.title,
          value: m.id,
        }))
      )
    );

    this.sectionOptions$ = this.ss.getSections().pipe(
      map((section) =>
        section.map((s) => ({
          label: s.title,
          value: s.id,
        }))
      )
    );

    if (this.id) {
      this.ss
        .getTask(this.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe((task) => {
          this.task = task;

          this.form.patchValue({
            title: task?.title || '',
            markId: task?.markId || null,
            content: task?.content || '',
            checked: task?.checked || false,
            sectionId: task?.sectionId || null,
            deadlineAt: task?.deadlineAt
              ? DateTime.fromMillis(task.deadlineAt).toJSDate()
              : null,
          });
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.titleRef.nativeElement.focus();
  }

  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
        if (event.key === 'Enter' && this.form.valid) {
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

  addNewMark(title: string): void {
    this.ss.createMark(title);
  }

  addNewSection(title: string): void {
    this.ss.createSection(title);
  }

  cancel(): void {
    this.approve.emit();
  }

  addNewTask(): void {
    this.ss.createTask({
      ...this.form.value,
      createdAt: DateTime.now().toMillis(),
      updatedAt: DateTime.now().toMillis(),
      deadlineAt: this.form.value.deadlineAt
        ? DateTime.fromJSDate(this.form.value.deadlineAt).toMillis()
        : null,
    });

    this.messageService.success('Задача создана', { nzDuration: 1300 });
    this.approve.emit();
  }

  updateTask(): void {
    this.ss.updateTask({
      ...this.task,
      ...this.form.value,
      deadlineAt: this.form.value.deadlineAt
        ? DateTime.fromJSDate(this.form.value.deadlineAt).toMillis()
        : null,
      updatedAt: new Date().getTime(),
    });

    this.messageService.success('Задача обновлена', { nzDuration: 1300 });
    this.approve.emit();
  }
}
