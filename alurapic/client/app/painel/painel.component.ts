/**
 * Created by Avell 1513 on 07/01/2017.
 */
import {Component, Input, OnInit, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{

    @Input() titulo;
    elemento: ElementRef;

    constructor(elemento: ElementRef){
        this.elemento = elemento
    }

    ngOnInit(): void {
        this.titulo = this.titulo.length > 7 ? this.titulo.substr(0,7) + "..." : this.titulo;
    }

    fadeOut(cb){
        $(this.elemento.nativeElement).fadeOut(cb);
    }
}
