import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component {
  @ViewChild('input')
  public input: ElementRef<HTMLInputElement>;

  public valeur: string;

  constructor() {}

  onKey() {
    this.valeur = this.input.nativeElement.value;
  }
}
