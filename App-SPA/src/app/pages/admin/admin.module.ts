import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from './../../core/core.module';
import { SharedModule } from './../../shared/shared.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component';
import { RolesModalComponent } from './roles-modal/roles-modal.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    ManageUsersComponent,
    UserEditModalComponent,
    RolesModalComponent
  ],
  entryComponents: [
    UserEditModalComponent,
    RolesModalComponent
  ]
})
export class AdminModule { }
