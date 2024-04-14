import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewComponent],
  template: `
  <!-- <router-outlet />  -->
  <h1>Hello</h1>
  <h2>Components</h2>
  <app-new-component></app-new-component>

  `,
})
export class AppComponent {

}
