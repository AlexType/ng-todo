import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() icon: string | undefined;
  @Input() size: 'sm' | 'md' | 'icon' = 'sm';
  @Input() type: 'gray' | 'gray-hover' = 'gray';
  @Input() color: 'white' | 'red' | 'gray' | 'blue' | 'green' = 'gray';
  @Input() colorIcon: 'white' | 'red' | 'gray' | 'blue' | 'green' = 'gray';
  @Input() tooltipText: string = '';
  @Input() tooltipPosition: string = 'top';

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  classes = {};

  ngOnInit(): void {
    this.cssClassesUpdate();
  }

  cssClassesUpdate(): void {
    this.classes = {
      btn: true,
      ['btn_size-' + this.size]: this.size,
      ['btn_type-' + this.type]: this.type,
      ['btn_color-' + this.color]: this.color,
      ['btn_icon-color-' + this.colorIcon]: this.colorIcon,
    };
  }

  clickHandler(): void {
    this.onClick.emit();
  }
}
