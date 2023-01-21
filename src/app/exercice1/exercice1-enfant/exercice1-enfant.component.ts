import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public result;
  @Output() public changementCompteur = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  incrementer() {
    this.result++;
    this.changementCompteur.emit({
      value: this.result,
    });
  }

  decrementer() {
    this.result--;
    this.changementCompteur.emit({
      value: this.result,
    });
  }
}
