/**
 * Created by Avell 1513 on 14/01/2017.
 */
"use strict";
var router_1 = require("@angular/router");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var listar_component_1 = require("./listar/listar.component");
var appRoutes = [
    { path: '', component: listar_component_1.ListarComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro/:id', component: cadastro_component_1.CadastroComponent },
    { path: '**', component: listar_component_1.ListarComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map