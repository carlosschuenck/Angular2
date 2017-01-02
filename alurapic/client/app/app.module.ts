import { NgModule } from '@angular/core'; // NgModule transforma a classe no modulo do angular
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
    imports: [BrowserModule], //para rodar no navegador tem que importar o BrowserModule, se fosse outra plataforma, seria outro import
    declarations: [ AppComponent ], //Informa o que faz parte do modulo
    bootstrap: [ AppComponent ] //Informa qual component que deseja iniciar quando o modulo for carregado
})
class AppModule {}