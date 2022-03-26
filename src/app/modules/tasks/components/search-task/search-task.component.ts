import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Observable, of, Subject, takeUntil } from 'rxjs';
import { IMark } from 'src/app/models/mark.interface';
import { ITask } from 'src/app/models/task.interface';
import { StoreService } from 'src/app/services/store.service';

import { TaskViewModalComponent } from '../modals/task-view-modal/task-view-modal.component';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTaskComponent implements OnInit, OnDestroy {
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.clear();
    }
  }

  form!: FormGroup;
  search: string = '';
  marks: IMark[] | undefined = [];
  tasks$: Observable<ITask[] | undefined> = of([]);

  private destroy$ = new Subject<void>();

  constructor(
    private el: ElementRef,
    private ss: StoreService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.ss
      .getMarks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((marks) => (this.marks = marks));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  createTaskViewModal(id: string): void {
    this.clear();

    this.modalService.create({
      nzContent: TaskViewModalComponent,
      nzFooter: null,
      nzWidth: '620px',
      nzComponentParams: {
        id,
      },
    });
  }

  onSearch(): void {
    this.tasks$ = this.ss
      .getTasks()
      .pipe(
        map((tasks) =>
          tasks.filter((t) =>
            t.title.toLowerCase().includes(this.search.toLowerCase())
          )
        )
      );
  }

  clear(): void {
    this.search = '';
    this.tasks$ = of([]);
  }

  getMark(id: string): IMark | undefined {
    return this.marks?.find((m) => m.id === id);
  }
}
