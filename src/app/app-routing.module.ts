import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'category/:category',
    loadChildren: './home/category/category.module#CategoryModule'
  },
  {
    path: 'sayings-nav/:category',
    loadChildren: './sayings-nav/sayings-nav.module#SayingsNavModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
