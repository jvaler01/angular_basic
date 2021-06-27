import { Injectable } from "@angular/core";
import { Digimon } from "src/app/models/Digimon.interface";

@Injectable()
export class DigimonService {

    private _digimons: Digimon[] = [
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

    get digimons(): Digimon[] {
        return [...this._digimons]; //remove reference with _digimons (js)
    }

    constructor(){
        console.log('Service started');
    }

    addDigimon( digimon: Digimon ){
        this._digimons.push(digimon);
    }
}