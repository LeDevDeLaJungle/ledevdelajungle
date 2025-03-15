import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isPopupOpen = false;
  credits = 0;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  watchPub() {
    alert(`Merci pour le coup de pouce ! :)`);
  }
}
