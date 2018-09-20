import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WorkspaceComponent} from './workspace/workspace.component';
import {ActivitiesLogComponent} from './activities-log/activities-log.component';
import {QueueComponent} from './queue/queue.component';
import {LicenseComponent} from './license/license.component';

const routes: Routes = [
  {path: '', component: WorkspaceComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'workspace', component: WorkspaceComponent},
  {path: 'activities-log', component: ActivitiesLogComponent},
  {path: 'queue', component: QueueComponent},
  {path: 'license', component: LicenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
