import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'ngx-avatar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './apps/whatsapp/header/header.component';
import { WhatsappComponent } from './apps/whatsapp/whatsapp.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { DemoMaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    WhatsappComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AvatarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
