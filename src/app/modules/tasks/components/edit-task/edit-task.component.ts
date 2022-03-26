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
import { DateTime } from 'luxon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, of } from 'rxjs';
import { IMark } from 'src/app/models/mark.interface';
import { ISection } from 'src/app/models/section.interface';
import { ITask } from 'src/app/models/task.interface';
import { StoreService } from 'src/app/services/store.service';

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
  sections$: Observable<ISection[]> = of([]);

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
    this.marks$ = this.ss.getMarks();
    this.sections$ = this.ss.getSections();

    if (this.id) {
      this.ss.getTask(this.id).subscribe((task) => {
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

        this.task = task;
      });
    }
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
    this.ss.createMark(input.value);
  }

  addNewSection(input: HTMLInputElement): void {
    this.ss.createSection(input.value);
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
