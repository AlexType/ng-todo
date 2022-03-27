import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  form!: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private messageService: NzMessageService
  ) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required, Validators.minLength(2)]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ],
      ],
    });
  }

  registration(): void {
    if (this.form.valid) {
      this.loading = true;

      this.userService
        .registration({ ...this.form.value })
        .pipe(
          tap((res) => {
            this.messageService.info(res.message);

            if (res.success) {
              this.router.navigate(['/authorization', 'log-in']);
            }
          }),
          finalize(() => (this.loading = false))
        )
        .subscribe();
    }
  }
}
