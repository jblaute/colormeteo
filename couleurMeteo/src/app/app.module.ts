import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DispoSelectComponent } from './dispo-select/dispo-select.component';


@NgModule({
  declarations: [
    AppComponent,
    DispoSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
