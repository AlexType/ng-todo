import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-section-create',
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionCreateComponent implements OnInit {
  adding: boolean = false;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private ss: StoreService) {}

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
    this.ss.createSection(this.form.value.title);

    this.form.reset();
  }
}
