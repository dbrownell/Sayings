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
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SayingsMaterialModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [
    SayingsService,
    CategoryRouteResolver,
    SayingsNavRouteResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
