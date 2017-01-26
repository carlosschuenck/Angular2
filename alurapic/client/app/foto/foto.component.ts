/**
 * Created by Avell 1513 on 04/01/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id, /*recurso utilizado para poder buscar arquivos a partir da pasta que está sendo utilizada e não escrever o caminho todo, logo abaixo um exemplo ex: templateUrl*/
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent {

    @Input() url: string;
    @Input() titulo: string;
    descricao: string;
}