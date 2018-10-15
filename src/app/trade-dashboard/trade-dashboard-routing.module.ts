import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { TradeDashboardComponent } from '@app/trade-dashboard/trade-dashboard.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', 
    component: TradeDashboardComponent, 
    data: { title: extract('NHL Fantasy Trade Tool') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TradeDashboardRoutingModule { }