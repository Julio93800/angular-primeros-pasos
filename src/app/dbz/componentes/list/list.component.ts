import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id: string| undefined):void{
    console.log(id)
    //TODO: Emitir el id del personaje
    this.onDelete.emit(id)

  }

  @Input()

  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

}
