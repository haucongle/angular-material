import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {DemoMaterialModule} from './shared/material/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DemoMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
