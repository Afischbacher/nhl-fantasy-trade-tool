import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { NhlScoreComponent } from './nhl-score.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'scores',  component: NhlScoreComponent, data: { title: 'NHL Scores - FantaHockey' } },
    { path: "", redirectTo: '/dashboard', pathMatch: 'full'}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class NhlScoresRoutingModule { }