/**
 * Created by Avell 1513 on 04/01/2017.
 */
import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltrarPorTitulo} from './foto.pipes';
import {FotoService} from './foto.service';

@NgModule({
    declarations: [ FotoComponent, FiltrarPorTitulo],
    exports: [FotoComponent, FiltrarPorTitulo],
    providers: [FotoService]
})
export class FotoModule {}