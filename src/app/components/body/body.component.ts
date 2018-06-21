import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
      mensaje: 'Un gran poder conlleva una gran responsabilidad',
      autor: 'Ben Parker'.toUpperCase()
    };
    personajes: string[] = ['Spiderman', 'Venom', 'Mr Octopus'];
}
