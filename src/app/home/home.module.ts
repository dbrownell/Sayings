import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SayingsGridComponent } from '../sayings-grid/sayings-grid.component';
import { CategoryComponent } from './category/category.component';
import { SayingsService } from '../shared/services/sayings.service';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  {
    path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: CategoriesComponent,
      resolve: {
        sayings: SayingsService
      } }
    ]
  },
  { path: 'category/:categoryId', component: CategoryComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule, MatGridListModule],
  declarations: [
    CategoriesComponent,
    SayingsGridComponent,
    CategoryComponent
  ]
})
export class HomeModule {}
