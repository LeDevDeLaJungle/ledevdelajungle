import { Component } from '@angular/core';
import {BoutonElectriqueComponent} from '../../composant/bouton-electrique/bouton-electrique.component';

@Component({
  selector: 'app-home',
  imports: [
    BoutonElectriqueComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
