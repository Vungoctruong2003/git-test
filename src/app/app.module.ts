import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruongComponent } from './truong/truong.component';
import { DuongComponent } from './duong/duong.component';

@NgModule({
  declarations: [
    AppComponent,
    TruongComponent,
    DuongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
