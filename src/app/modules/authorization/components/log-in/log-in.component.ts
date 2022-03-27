import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
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

  login(): void {
    if (this.form.valid) {
      this.loading = true;

      this.userService
        .login({ ...this.form.value })
        .pipe(
          tap((res) => {
            this.messageService.info(res.message);

            if (res.success) {
              localStorage.setItem('token', JSON.stringify(res.token));
            }
          }),
          finalize(() => (this.loading = false))
        )
        .subscribe();
    }
  }
}
