import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/models/task.interface';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-task-view-modal',
  templateUrl: './task-view-modal.component.html',
  styleUrls: ['./task-view-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskViewModalComponent implements OnInit {
  @Input() id!: string;

  task$!: Observable<ITask | undefined>;

  constructor(private ss: StoreService) {}

  ngOnInit(): void {
    this.task$ = this.ss.getTask(this.id);
  }
}
