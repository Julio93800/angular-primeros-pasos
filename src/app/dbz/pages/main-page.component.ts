import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface'; //interfaces no se importan en el modulo
import { start } from '@popperjs/core';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-dbz-main-page',//Nombre del componente personalizado
  templateUrl: 'main-page.component.html' //o con ./ para seleccionarlo de manera rapida
})

export class MainPageComponent  {
  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character ) {
    this.dbzService.onNewCharacter( character );
  }
}
