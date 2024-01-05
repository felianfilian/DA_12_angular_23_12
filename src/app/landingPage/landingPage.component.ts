import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  template: '<h1>hello mario</h1>',
  styles: ['h1 { color: red; }'],
})
export class landingPageComponent {}
