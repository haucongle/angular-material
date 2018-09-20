import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRouters} from './app.routes';
import {DataService} from './data/data.service';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ActivitiesLogComponent } from './activities-log/activities-log.component';
import { QueueComponent } from './queue/queue.component';
import { LicenseComponent } from './license/license.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkspaceComponent,
    ActivitiesLogComponent,
    QueueComponent,
    LicenseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters,
    FormsModule,
  ],
  providers: [
    DataService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
