import { Component, Input, OnInit } from '@angular/core';
import { Digimon } from '../../models/Digimon.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input()
  digimons: Digimon[]= [];

  constructor() { }

  ngOnInit(): void {
  }

}
