import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { SayingsMaterialModule } from 'src/app/sayings-material/sayings-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CategoryComponent }]),
    SayingsMaterialModule
  ]
})
export class CategoryModule {}
