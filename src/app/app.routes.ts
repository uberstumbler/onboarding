import { Routes } from '@angular/router';
import { StrategyComponent } from './components/strategy/strategy.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'strategy',
    pathMatch: 'full',
  },
  {
    path: 'strategy',
    component: StrategyComponent,
  },
  {
    path: 'personal-detail',
    component: PersonalDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'strategy',
  },
];
