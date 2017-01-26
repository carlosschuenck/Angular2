/**
 * Created by Avell 1513 on 14/01/2017.
 */
import {Component} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {FotoComponent} from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listar',
    templateUrl: './listar.component.html'
})
export class ListarComponent {

    fotos: FotoComponent[] = [];

    constructor(service: FotoService) {
        service.listar()
               .subscribe(fotos => this.fotos = fotos, 
                          erro => console.log(erro)
                          );
    }

}