import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule } from '@angular/router';
import { myAccountRoutes } from './my-account.route';



@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,

    SharedModule,

    RouterModule.forChild(myAccountRoutes)
  ]
})
export class MyAccountModule { }
