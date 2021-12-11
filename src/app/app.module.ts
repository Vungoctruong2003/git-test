import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruongComponent } from './truong/truong.component';
import { DuongComponent } from './duong/duong.component';
import { Duong3Component } from './duong3/duong3.component';
import { Truong4Component } from './truong4/truong4.component';

@NgModule({
  declarations: [
    AppComponent,
    TruongComponent,
    DuongComponent,
    Duong3Component,
    Truong4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
