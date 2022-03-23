import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminModalPageRoutingModule } from './admin-modal-routing.module';

import { AdminModalPage } from './admin-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminModalPageRoutingModule
  ],
  declarations: [AdminModalPage]
})
export class AdminModalPageModule {}
