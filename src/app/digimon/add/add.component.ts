import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Digimon } from '../../models/Digimon.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input()
  digimon: Digimon = {
    name: '',
    type: ''
  };

  @Output()
  onNewCharacter: EventEmitter<Digimon> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.digimon.name.trim().length === 0 && this.digimon.type.trim().length === 0){
      return;
    }
    console.log(this.digimon);
    this.onNewCharacter.emit( this.digimon );
    this.digimon = {
      name: '',
      type: ''
    }
  }
}
