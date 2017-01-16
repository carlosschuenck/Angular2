/**
 * Created by Avell 1513 on 04/01/2017.
 */
import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltrarPorTitulo} from './foto.pipes';

@NgModule({
    declarations: [ FotoComponent, FiltrarPorTitulo],
    exports: [FotoComponent, FiltrarPorTitulo]
})
export class FotoModule {}