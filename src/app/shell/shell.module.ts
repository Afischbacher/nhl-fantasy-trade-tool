import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuListItemComponent } from '@app/shell/menu-list-item/menu-list-item.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MenuListItemModule } from '@app/shell/menu-list-item/menu-list-item.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    FontAwesomeModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MenuListItemModule
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    MenuListItemComponent
  ]
})
export class ShellModule {
}
