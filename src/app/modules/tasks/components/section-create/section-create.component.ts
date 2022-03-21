import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddSection } from 'src/app/store/actions/mark.actions';
import { IAppState } from 'src/app/store/state/_app.state';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-section-create',
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionCreateComponent implements OnInit {
  adding: boolean = false;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store$: Store<IAppState>) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
    });
  }

  setAdding(status: boolean): void {
    this.adding = status;
  }

  addSection(): void {
    this.setAdding(false);

    this.store$.dispatch(
      new AddSection({
        section: { id: uuidv4(), title: this.form.value.title },
      })
    );

    this.form.reset();
  }
}
