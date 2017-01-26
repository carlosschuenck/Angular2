/**
 * Created by Avell 1513 on 07/01/2017.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{

    @Input() titulo;

    ngOnInit(): void {
        this.titulo = this.titulo.length > 7 ? this.titulo.substr(0,7) + "..." : this.titulo;
    }
}
