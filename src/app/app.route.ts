import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent },
  { path: 'document', loadChildren: () => import('../modules/document/document.module').then(m => m.DocumentModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
