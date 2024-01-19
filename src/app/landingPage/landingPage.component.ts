import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  template: '<h1>hello mario</h1>',
  styleUrls: ['./landingPage.component.scss'],
})
export class landingPageComponent {}
