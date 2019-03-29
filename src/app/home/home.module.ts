import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SayingsNavComponent } from '../sayings-nav/sayings-nav.component';
import { SayingsMaterialModule } from '../sayings-material/sayings-material.module';
import { SayingsListComponent } from '../sayings-list/sayings-list.component';
@NgModule({
  imports: [
    CommonModule,
    SayingsMaterialModule
  ],
  declarations: [
    HomeComponent,
    SayingsNavComponent,
    SayingsListComponent
  ]
})
export class HomeModule {}
