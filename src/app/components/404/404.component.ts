import { Component } from '@angular/core';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss'],
})
export class NotFoundComponent {
  constructor() {
    console.log(4);
  }
}