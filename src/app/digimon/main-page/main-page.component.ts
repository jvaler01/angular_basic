import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Digimon } from '../../models/Digimon.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  digimon: Digimon = {
    name: '',
    type: ''
  };

  // digimons: Digimon[] = [
  //   {
  //     name: 'Agumon',
  //     type: 'fire'
  //   },
  //   {
  //     name: 'Gabumon',
  //     type: 'fire'
  //   },
  //   {
  //     name: 'Patamon',
  //     type: 'flying'
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  // addNewCharacter( digimon: Digimon ){
  //   this.digimons.push(digimon);
  // }
}
