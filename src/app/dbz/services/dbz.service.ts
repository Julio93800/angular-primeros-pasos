import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Veggeta',
    power: 7500
  }];


//Desestrufturamos la interface
  onNewCharacter( character: Character):void{
    //Desestrufturamos la interface character para que rellene automaticamente
    const newCharacter: Character = { id:uuid(), ...character};


    //El metodo push sirve para agregar un objeto al final de una lista
    this.characters.push(newCharacter);

  }
/*
  onDeleteCharacter(index: number):void{
    this.characters.splice(index, 1)
    console.log('Main page index')
    console.log(index)

  }
  */
 //Utilizamos el id de uuid para recrear la lista filtrando por el nuevo id
 deleteCharacterById (id: string) {
  this.characters = this.characters.filter( characters => characters.id !== id );
 }
}
