/**
 * Created by Avell 1513 on 14/01/2017.
 */

import {Routes, RouterModule} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListarComponent} from './listar/listar.component';

const appRoutes: Routes = [
    { path: '', component: ListarComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: '**', component: ListarComponent}
];

export const routing = RouterModule.forRoot(appRoutes);




