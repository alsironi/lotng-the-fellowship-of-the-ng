import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GandalfComponent } from './characters/gandalf/gandalf.component';
import { TheodenComponent } from './characters/theoden/theoden.component';
import { FrodoComponent } from './characters/frodo/frodo.component';
import { SamComponent } from './characters/sam/sam.component';
import { AragornComponent } from './characters/aragorn/aragorn.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gandalf', component: GandalfComponent },
  { path: 'theoden', component: TheodenComponent },
  { path: 'frodo', component: FrodoComponent },
  { path: 'sam', component: SamComponent },
  { path: 'aragorn', component: AragornComponent },
  { path: '**', redirectTo: '' }
];
