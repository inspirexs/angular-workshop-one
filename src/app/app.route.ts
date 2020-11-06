import { Routes } from '@angular/router';
import { DocsComponent } from 'src/modules/document/docs/docs.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent },
  { path: 'document', component: DocsComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
