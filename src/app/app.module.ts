import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './shared/material/material.module';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './apps/whatsapp/header/header.component';
import { WhatsappComponent } from './apps/whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    WhatsappComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, DemoMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
