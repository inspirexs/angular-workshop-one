import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs/docs.component';
import { DocsResultComponent } from './docs/docs-result/docs-result.component';
import { RouterModule } from '@angular/router';
import { documentRoutes } from './document.route';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DocsComponent,
    DocsResultComponent
  ],
  imports: [
    CommonModule,

    SharedModule,

    RouterModule.forChild(documentRoutes)
  ],
  exports: [ ]
})
export class DocumentModule { }
