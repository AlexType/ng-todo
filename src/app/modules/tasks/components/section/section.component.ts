import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ISection } from 'src/app/models/section.interface';
import { ITask } from 'src/app/models/task.interface';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  @Input() sections!: ISection[];

  constructor(private ss: StoreService) {}

  getTasks(section: ISection): Observable<ITask[]> {
    return (
      this.ss
        .getTasks()
        .pipe(
          map((tasks) => tasks.filter((t) => t?.sectionId === section.id))
        ) || of([])
    );
  }

  deleteSection(id: string): void {
    this.ss.deleteSection(id);
  }
}
