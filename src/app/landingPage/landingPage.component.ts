import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
  <section>
    <div>
    <app-navbar></app-navbar>  
    </div>
    
    <h1>Sakura Ramen</h1>
    <h2>Best Ramen in town</h2>
  </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class landingPageComponent {}
