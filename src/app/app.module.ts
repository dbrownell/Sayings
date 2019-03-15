import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SayingsMaterialModule} from './sayings-material/sayings-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SayingsService } from './shared/services/sayings.service';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [SayingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
