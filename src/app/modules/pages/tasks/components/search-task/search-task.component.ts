import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Observable, of } from 'rxjs';
import { IMark } from 'src/app/models/mark.interface';
import { ITask } from 'src/app/models/task.interface';
import { selectMarkList } from 'src/app/store/selectors/mark.selector';
import { selectTaskList } from 'src/app/store/selectors/task.selector';
import { IAppState } from 'src/app/store/state/_app.state';

import { TaskViewComponent } from '../task-view/task-view.component';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTaskComponent implements OnInit {
  form!: FormGroup;
  search: string = '';
  marks: IMark[] | undefined = [];
  tasks$: Observable<ITask[] | undefined> = of([]);

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.clear();
    }
  }

  constructor(
    private el: ElementRef,
    private store$: Store<IAppState>,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.store$
      .select(selectMarkList)
      .subscribe((marks) => (this.marks = marks));
  }

  createTaskViewModal(id: string): void {
    this.clear();

    this.modalService.create({
      nzContent: TaskViewComponent,
      nzFooter: null,
      nzWidth: '620px',
      nzComponentParams: {
        id,
      },
    });
  }

  onSearch(): void {
    this.tasks$ = this.store$
      .select(selectTaskList)
      .pipe(map((tasks) => tasks.filter((t) => t.title.includes(this.search))));
  }

  clear(): void {
    this.search = '';
    this.tasks$ = of([]);
  }

  getMark(id: string): IMark | undefined {
    return this.marks?.find((m) => m.id === id);
  }
}
