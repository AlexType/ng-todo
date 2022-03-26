import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IMark } from 'src/app/models/mark.interface';
import { ISection } from 'src/app/models/section.interface';
import { ITask } from 'src/app/models/task.interface';
import { StoreService } from 'src/app/services/store.service';
import { checkDeadline } from 'src/const';

import { TaskViewModalComponent } from '../modals/task-view-modal/task-view-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit, OnDestroy {
  @Input() task!: ITask;
  @Input() isRoot: boolean = true;

  @ViewChild('taskRef') taskRef!: ElementRef<HTMLElement>;

  form!: FormGroup;
  minHeight!: number;
  isEditing: boolean = false;
  deadline: boolean = false;
  mark$!: Observable<IMark | undefined>;
  section$!: Observable<ISection | undefined>;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private ss: StoreService,
    private modalService: NzModalService,
    private messageService: NzMessageService
  ) {}

  ngOnInit(): void {
    if (this.task.deadlineAt) {
      this.deadline = checkDeadline(this.task.deadlineAt);
    }

    this.mark$ = this.ss.getMark(this.task?.markId);
    this.section$ = this.ss.getSection(this.task?.sectionId);

    this.form = this.fb.group({
      checked: [this.task?.checked, Validators.required],
      deadlineAt: [
        this.task?.deadlineAt
          ? DateTime.fromMillis(this.task?.deadlineAt).toJSDate()
          : null,
      ],
    });

    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((form) => {
      this.ss.updateTask({
        ...this.task,
        checked: form.checked,
        updatedAt: DateTime.now().toMillis(),
        deadlineAt: form.deadlineAt
          ? DateTime.fromJSDate(form.deadlineAt).toMillis()
          : null,
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.minHeight = this.taskRef.nativeElement.offsetHeight;
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
    this.ss.removeTask(this.task.id);
    this.messageService.info('Задача удалена', {
      nzDuration: 1300,
    });
  }

  setIsEditing(status: boolean): void {
    this.isEditing = status;
  }
}
