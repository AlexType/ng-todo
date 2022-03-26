import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnDestroy, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

export interface IOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-select-icon',
  templateUrl: './select-icon.component.html',
  styleUrls: ['./select-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectIconComponent),
      multi: true,
    },
  ],
})
export class SelectIconComponent implements ControlValueAccessor, OnDestroy {
  @Input() placeholder: string = '';
  @Input() options: IOption[] = [];
  @Input() width: string = '134px';

  @Output() createNewOption = new EventEmitter<string>();

  control = new FormControl();

  onChange: any;
  onTouched: any;

  private destroy$ = new Subject<void>();

  constructor(private ss: StoreService) {
    this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((r) => {
      if (this.onChange) {
        this.onChange(r);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  createNew(input: HTMLInputElement): void {
    this.createNewOption.emit(input.value);
  }
}
