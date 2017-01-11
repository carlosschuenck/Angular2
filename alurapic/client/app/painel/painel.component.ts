/**
 * Created by Avell 1513 on 07/01/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent {
    @Input() titulo;
}
