import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Digimon } from '../../models/Digimon';

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

  digimons: Digimon[] = [
    {
      name: 'Agumon',
      type: 'fire'
    },
    {
      name: 'Gabumon',
      type: 'fire'
    },
    {
      name: 'Patamon',
      type: 'flying'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.digimon.name.trim().length === 0 && this.digimon.type.trim().length === 0){
      return;
    }
    console.log(this.digimon);
    this.digimons.push(this.digimon);
    this.digimon = {
      name: '',
      type: ''
    }
  }
}
