import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Thomas Shelby'
  public age = 32;
  public isDisable = true
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event)
  }

  public onMouseEvent(event: MouseEvent) {
    return console.log(event.clientX)
  }
}
