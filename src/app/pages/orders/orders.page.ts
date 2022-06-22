import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { WoocommerceService } from 'src/app/services/woocommerce.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders:any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    let isUserLoggedIn = localStorage.getItem('currentUserId');
    this.auth.getOrdersByCustomer(isUserLoggedIn).subscribe((data) =>{
      this.orders = data;
      console.log('All Orders by a customer', this.orders);
    });
  }

  

}
