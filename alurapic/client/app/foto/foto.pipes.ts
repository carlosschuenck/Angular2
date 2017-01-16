import {Pipe, PipeTransform} from '@angular/core';
import {FotoComponent} from './foto.component';

@Pipe({
  name: 'filtrarPorTitulo'  
})
export class FiltrarPorTitulo implements PipeTransform {

    transform(listaFotos: FotoComponent[], filtroDigitado: string){
        console.log(listaFotos);
        console.log(filtroDigitado);

        filtroDigitado = filtroDigitado.toLowerCase();
        return listaFotos.filter( foto => foto.titulo.toLowerCase().includes(filtroDigitado));
    }
}