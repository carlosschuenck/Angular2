/**
 * Created by Avell 1513 on 14/01/2017.
 */
import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listar',
    templateUrl: './listar.component.html'
})
export class ListarComponent {

    fotos: Object[] = [];

    constructor(http: Http) {

        http
            .get('v1/fotos')
            .map(res => res.json())
            .subscribe(fotos => {
                this.fotos = fotos;
                console.log(this.fotos);
            }, erro => console.log(erro))

    }

}