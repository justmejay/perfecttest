import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalshippingPage } from './modalshipping.page';

const routes: Routes = [
  {
    path: '',
    component: ModalshippingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalshippingPageRoutingModule {}
