import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestedSayingComponent } from './suggested-saying/suggested-saying.component';
import { SayingsNavRouteResolverService } from './sayings-nav/sayings-nav-route-resolver.service';
import { SayingsNavComponent } from './sayings-nav/sayings-nav.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CategoryRouteResolver } from './home/categories/category-route-resolver';
import { HomeComponent } from './home/home.component';
import { HomeRouteResolverService } from './home/home-route-resolver.service';
import { SayingsListComponent } from './sayings-list/sayings-list.component';
import { SayingsListResolverService } from './sayings-list/sayings-list-resolver.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  {
    path: 'categories',
    component: CategoriesComponent,
    resolve: {
      sayingsResolver: CategoryRouteResolver
    }
  },
  {
    path: 'sayings-nav/:category',
    loadChildren: './sayings-nav/sayings-nav.module#SayingsNavModule'
  },
  {
    path: 'home/:categoryTitle',
    loadChildren: './home/home.module#HomeModule',
    component: HomeComponent,
    resolve: {
      homeResolver: HomeRouteResolverService
    },
    data: { path: 'home/:categoryTitle' }
  },
  {
    path: 'sayings-list/:categoryTitle',
    loadChildren: './sayings-list/sayings-list.module#SayingsListModule',
    component: SayingsListComponent,
    resolve: {
      listResolver: SayingsListResolverService
    }
  },
  {
    path: 'suggested-saying',
    loadChildren: './suggested-saying/suggested-saying.module#SuggestedSayingModule',
    component: SuggestedSayingComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
