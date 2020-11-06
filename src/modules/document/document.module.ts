import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs/docs.component';
import { DocsResultComponent } from './docs/docs-result/docs-result.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { documentRoutes } from './document.route';



@NgModule({
  declarations: [
    DocsComponent,
    DocsResultComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatInputModule,

    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild(documentRoutes)
  ],
  exports: [ ]
})
export class DocumentModule { }
