import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SayingsGridComponent } from '../sayings-grid/sayings-grid.component';
import { CategoryComponent } from './category/category.component';
import { CategoryRouteResolver } from './categories/category-route-resolver';
import { SayingsNavComponent } from '../sayings-nav/sayings-nav.component';
import { SayingsMaterialModule } from '../sayings-material/sayings-material.module';
import { SayingsNavRouteResolverService } from '../sayings-nav/sayings-nav-route-resolver.service';
import { SayingsListComponent } from '../sayings-list/sayings-list.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  {
    path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: CategoriesComponent,
      resolve: {
        sayingsResolver: CategoryRouteResolver
      }
    }
    ]
  },
  { path: 'sayings-nav/:categoryTitle', component: SayingsNavComponent,
  resolve: {
    sayingsNavResolver: SayingsNavRouteResolverService
  },
  data: { path: 'sayings-nav/:categoryTitle' }
 }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SayingsMaterialModule
  ],
  declarations: [
    CategoriesComponent,
    SayingsGridComponent,
    CategoryComponent,
    SayingsNavComponent,
    SayingsListComponent
  ]
})
export class HomeModule {}
