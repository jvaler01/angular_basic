import { Component, Input, OnInit } from '@angular/core';

import { Digimon } from '../../models/Digimon.interface';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  //@Input()
  //digimons: Digimon[]= [];
  get digimons(){
    return this.digimonService.digimons;
  }

  constructor( private digimonService: DigimonService ) { }

  ngOnInit(): void {
  }

}
