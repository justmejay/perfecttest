import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalbillingPageRoutingModule } from './modalbilling-routing.module';

import { ModalbillingPage } from './modalbilling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalbillingPageRoutingModule
  ],
  declarations: [ModalbillingPage]
})
export class ModalbillingPageModule {}
