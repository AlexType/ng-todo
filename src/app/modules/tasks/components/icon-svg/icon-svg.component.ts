import { Component, Input } from '@angular/core';
import { EColor } from 'src/const';

@Component({
  selector: 'app-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss'],
})
export class IconSvgComponent {
  @Input() svg!: string;
  @Input() fontSize: string = '16px';
  @Input() color: EColor | string = EColor.Default;
}
