import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruongComponent } from './truong/truong.component';
import { Truong3Component } from './truong3/truong3.component';

@NgModule({
  declarations: [
    AppComponent,
    TruongComponent,
    Truong3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
