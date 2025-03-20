import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-bouton-electrique',
  imports: [
    RouterLink
  ],
  templateUrl: './bouton-electrique.component.html',
  styleUrl: './bouton-electrique.component.scss'
})
export class BoutonElectriqueComponent {
  @Input() texte: string = 'Button';
}
