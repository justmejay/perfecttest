import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WoocommerceService } from '../services/woocommerce.service';
import { Storage } from '@ionic/storage';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';
import { CustomerModel } from '../models/customerModel';
import { ModalController } from '@ionic/angular';
import { ModalshippingPage } from '../pages/modalshipping/modalshipping.page';
import { ModalbillingPage } from '../pages/modalbilling/modalbilling.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

/* add these so that page.html works perfectly */
customerId:any;
customerData: any = {
  avatar_url: 'not found'
}
presentingElement = null;
constructor( private authService:AuthService, private storage: Storage, public modalCtrl:ModalController) {
  
 }
 

ngOnInit() {
  this.presentingElement = document.querySelector('.ion-page');
  let isUserLoggedIn = localStorage.getItem('currentUserId');
    this.authService.getCustomerData(isUserLoggedIn).subscribe((data)=>{
      this.customerData = data;
      console.log('Customer Data: ',this.customerData);
    })


}

logout() {
  this.authService.logout();
}

async showModal() {  
  const modal = await this.modalCtrl.create({  
    component: ModalshippingPage  
  });  
  return await modal.present();  
}  
async showModale() {  
  const modal = await this.modalCtrl.create({  
    component: ModalbillingPage  
  });  
  return await modal.present();  
}  
}