import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule, TooltipModule],
  bootstrap: [ButtonComponent],
})
export class ButtonModule {}
