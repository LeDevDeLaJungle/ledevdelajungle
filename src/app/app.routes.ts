import { Routes } from '@angular/router';
import {PreparerEntretienComponent} from './pages/preparer-entretien/preparer-entretien.component';
import {HomeComponent} from './pages/home/home.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'apprendre', component: PreparerEntretienComponent},
  {path: 'portfolio', component: PortfolioComponent}
];
