import { Routes } from '@angular/router';
import {PreparerEntretienComponent} from './pages/preparer-entretien/preparer-entretien.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'apprendre', component: PreparerEntretienComponent}
];
