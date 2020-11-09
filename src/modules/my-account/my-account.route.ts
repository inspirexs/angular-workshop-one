import { Routes } from '@angular/router';
import { TravellerResolver } from '../shared/resolvers/traveller.resolver';
import { MyAccountComponent } from './my-account/my-account.component';


export const myAccountRoutes: Routes = [
  { path: '', component: MyAccountComponent, resolve: { traveller: TravellerResolver} },
];
