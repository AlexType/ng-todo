import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[icon-svg]',
})
export class IconSvgDirective {
  @HostBinding('class') className = 'ant-btn-icon-only';
}
