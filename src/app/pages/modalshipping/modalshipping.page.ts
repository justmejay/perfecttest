import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modalshipping',
  templateUrl: './modalshipping.page.html',
  styleUrls: ['./modalshipping.page.scss'],
})
export class ModalshippingPage implements OnInit {

  customerId:any;
customerData: any = {
  avatar_url: 'not found'
}

  constructor(private authService: AuthService, private modalCtrl: ModalController) { }

  ngOnInit() {

    let isUserLoggedIn = localStorage.getItem('currentUserId');
    this.authService.getCustomerData(isUserLoggedIn).subscribe((data)=>{
      this.customerData = data;
      console.log('Customer Data: ',this.customerData);
    })
  }

  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
}
