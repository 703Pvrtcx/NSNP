import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModalPage } from './admin-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AdminModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModalPageRoutingModule {}
