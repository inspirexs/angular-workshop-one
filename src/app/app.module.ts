import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

import { ContentInnerComponent } from './components/content/content-inner/content-inner.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { Subroute1Component } from './components/content/content-subroutes/subroute1/subroute1.component';
import { Subroute2Component } from './components/content/content-subroutes/subroute2/subroute2.component';
import { SharedModule } from 'src/modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    HeaderComponent,
    ContentComponent,
    ContentInnerComponent,
    Subroute1Component,
    Subroute2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
