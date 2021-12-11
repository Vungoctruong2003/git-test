import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruongComponent } from './truong/truong.component';
import { DuongComponent } from './duong/duong.component';
import { Duong3Component } from './duong3/duong3.component';
import { Duong5Component } from './duong5/duong5.component';

@NgModule({
  declarations: [
    AppComponent,
    TruongComponent,
    DuongComponent,
    Duong3Component,
    Duong5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
