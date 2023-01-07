import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { FunctionsComponent } from './functions/functions.component';
import { SystemsRoutingModule } from './systems-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    RolesComponent,
    PermissionsComponent,
    FunctionsComponent
  ],
  imports: [
    CommonModule,
    SystemsRoutingModule
  ]
})
export class SystemsModule { }
