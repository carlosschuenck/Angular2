import {NgModule} from '@angular/core'; // NgModule transforma a classe no modulo do angular
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {PainelModule} from './painel/painel.module';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule, PainelModule], //para rodar no navegador tem que importar o BrowserModule, se fosse outra plataforma, seria outro import
    declarations: [AppComponent], //Informa o que faz parte do modulo
    bootstrap: [AppComponent] //Informa qual component que deseja iniciar quando o modulo for carregado
})
export class AppModule {
}