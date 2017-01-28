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
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
        this.service = service;

        this.service.listar()
            .subscribe(fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

    remove(foto: FotoComponent): void {
        this.service.remove(foto)
                    .subscribe(
                        () => {
                            console.log("Foto excluída com sucesso");
                            let novasFotos = this.fotos.slice(0);
                            let indice = novasFotos.indexOf(foto);
                            novasFotos.splice(indice, 1);
                            this.fotos = novasFotos;
                            this.mensagem = 'Foto foi removida com sucesso';
                        },
                        erro => {
                            console.log(erro);
                            this.mensagem = 'Não foi possível remover a foto';
                        }
                    );
    }
}