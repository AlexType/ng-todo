import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { ISection } from 'src/app/models/section.interface';
import { ITask } from 'src/app/models/task.interface';
import { DeleteSection } from 'src/app/store/actions/mark.actions';
import { selectTaskList } from 'src/app/store/selectors/task.selector';
import { IAppState } from 'src/app/store/state/_app.state';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  @Input() sections!: ISection[];

  constructor(private store$: Store<IAppState>) {}

  getTasks(section: ISection): Observable<ITask[]> {
    return (
      this.store$
        .select(selectTaskList)
        .pipe(
          map((tasks) => tasks.filter((t) => t?.sectionId === section.id))
        ) || of([])
    );
  }

  deleteSection(id: string): void {
    this.store$.dispatch(new DeleteSection({ id }));
  }
}
