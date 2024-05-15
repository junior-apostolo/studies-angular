import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('John ');
  public lastName = signal('Doe');

  public fullName = computed(() => {
    return this.firstName() + this.lastName()
  })

  public array = signal([1]);

  constructor() {
    effect(() => {
      console.log(this.firstName())
      console.log(this.array())
    })
  }

  public updateName(){
    return this.firstName.set("Max ")
  }

  public updateArray(){
    this.array.update((oldValue: number[]) => {
      return [...oldValue, oldValue.length + 1]
    })
  }
}
