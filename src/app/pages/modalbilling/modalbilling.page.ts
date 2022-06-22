import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modalbilling',
  templateUrl: './modalbilling.page.html',
  styleUrls: ['./modalbilling.page.scss'],
})
export class ModalbillingPage implements OnInit {

  constructor(private modalCtrl: ModalController, private authService: AuthService) { }
  customerId:any;
customerData: any = {
  avatar_url: 'not found'
}

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
