import {AgGridModule} from 'ag-grid-angular/dist/aggrid.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SayingsMaterialModule} from './sayings-material/sayings-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SayingsService } from './shared/services/sayings.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryRouteResolver } from './home/categories/category-route-resolver';
import { LayoutModule } from '@angular/cdk/layout';
import { SayingsNavRouteResolverService } from './sayings-nav/sayings-nav-route-resolver.service';
import { SuggestedSayingComponent } from './suggested-saying/suggested-saying.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SayingsNavComponent } from './sayings-nav/sayings-nav.component';
import { SayingsGridComponent } from './sayings-grid/sayings-grid.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { SayingsListComponent } from './sayings-list/sayings-list.component';
import { HomeComponent } from './home/home.component';
import { HomeRouteResolverService } from './home/home-route-resolver.service';
@NgModule({
  declarations: [
    AppComponent,
    SuggestedSayingComponent,
    SayingsNavComponent,
    SayingsGridComponent,
    CategoriesComponent,
    CategoriesComponent,
    SayingsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SayingsMaterialModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AgGridModule.withComponents([])

  ],
  providers: [
    SayingsService,
    CategoryRouteResolver,
    SayingsNavRouteResolverService,
    HomeRouteResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
