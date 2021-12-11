import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HanComponent } from './han/han.component';
=======
import { TruongComponent } from './truong/truong.component';
>>>>>>> 077e3786fd759f4c0ca65eea2dda78ab6c278bbe

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HanComponent
=======
    TruongComponent
>>>>>>> 077e3786fd759f4c0ca65eea2dda78ab6c278bbe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
