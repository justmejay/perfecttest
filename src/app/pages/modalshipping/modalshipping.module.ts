import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalshippingPageRoutingModule } from './modalshipping-routing.module';

import { ModalshippingPage } from './modalshipping.page';
import { Routes } from '@angular/router';

const routes: Routes = [  
  {  
    path: '',  
    component: ModalshippingPage  
  }  
];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalshippingPageRoutingModule
  ],
  declarations: [ModalshippingPage]
})
export class ModalshippingPageModule {}
