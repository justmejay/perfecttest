import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalbillingPage } from './modalbilling.page';

const routes: Routes = [
  {
    path: '',
    component: ModalbillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalbillingPageRoutingModule {}
