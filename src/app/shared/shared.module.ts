import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { CoreModule } from '../core/';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    CoreModule
  ],
  declarations: [BreadcrumbsComponent, SpinnerComponent],
  exports: [
    BreadcrumbsComponent,
    SpinnerComponent,
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
