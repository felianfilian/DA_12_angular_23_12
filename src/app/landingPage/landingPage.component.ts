import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section>
    <h1>Sakura Ramen</h1>
    <h2>Best Ramen in town</h2>
  </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class landingPageComponent {}
