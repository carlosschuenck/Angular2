/**
 * Created by Avell 1513 on 14/01/2017.
 */
import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId:  module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();

    cadastrar(event){
        event.preventDefault();
        console.log(this.foto);
    }
}