import { Routes } from '@angular/router';
import { AuthGuard } from 'src/modules/shared/guards/auth.guard';
import { Subroute1Component } from './components/content/content-subroutes/subroute1/subroute1.component';
import { Subroute2Component } from './components/content/content-subroutes/subroute2/subroute2.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent, canActivate: [AuthGuard], children: [
    {path: 'subroute1', component: Subroute1Component },
    {path: 'subroute2/:idx', component: Subroute2Component },
  ] },
  { path: 'document', canActivate: [AuthGuard],  loadChildren: () => import('../modules/document/document.module').then(m => m.DocumentModule) },
  { path: 'my-account', canActivate: [AuthGuard],  loadChildren: () => import('../modules/my-account/my-account.module').then(m => m.MyAccountModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
