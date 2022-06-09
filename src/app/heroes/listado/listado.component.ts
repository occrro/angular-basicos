import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

heroes: string[] = ['Spiderman1', 'Ironman', 'Hulk', 'Captain America'];

hereoBorrado: string = '';


borrarHeroe() {

  console.log('Borrando.....')

  this.hereoBorrado  = this.heroes.pop() || '';
  

}

}
