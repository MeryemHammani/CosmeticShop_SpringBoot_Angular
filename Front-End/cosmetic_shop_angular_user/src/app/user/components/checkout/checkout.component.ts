import { Component } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/admin/models/order';
import { Cart } from 'src/app/admin/models/cart';
import { ProductServiceService } from '../../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  carts: any;
  total_price: any;
  order!: Order;

  public form!: FormGroup;

  constructor(private fb: FormBuilder, public orderService: OrderServiceService, private prodService: ProductServiceService, private router: Router) {
    // display data from the localstorage
    this.carts = this.orderService.service.getData("carts");
    this.total_price = this.orderService.service.getData("total_price");

    this.form = this.fb.group({
      address: [null, Validators.required],
      phone: [null, [Validators.required, Validators.pattern(/^(\+212|0)[5-7][0-9]{8}$/)]],
      payment_type: [null, Validators.required],
    });
    // Initialize the Order
    this.order = {
      id: 0,
      amount: 0,
      phone: '',
      address: '',
      status: '',
      order_date: new Date(),
      payment_type: '',
      user: { id: 0 },
      orderItems: [],
    };
  }

  public onSaveOrder() {

    this.order.address = this.form.get('address')?.value;
    this.order.phone = this.form.get('phone')?.value;
    this.order.payment_type = this.form.get('payment_type')?.value;
    this.order.amount = this.total_price;
    this.order.status = "pending";
    this.order.user = { "id": this.prodService.user_id };
    this.carts.forEach((el: Cart) => {
      const orderItem = this.fromCartToOrderItem(el);
      this.order.orderItems.push(orderItem);
    });

    this.orderService.saveOrder(this.order).subscribe({
      next: (response) => {
        //if the order is done clear the userCarts & setCartsCount null && clear the local storage (carts & price) & navigate
        this.prodService.RemoveAllUserCarts().subscribe();
        let qte = this.prodService.getCount();
        this.prodService.setCount(-qte);
        localStorage.removeItem("carts");
        localStorage.removeItem("total_price");
        this.router.navigate(['/user/mon-compte/orders']);
      },
      error: (err) => { console.log(err) }
    });

  }

  public fromCartToOrderItem(cart: Cart) {
    let item = { "amount": 0, "quantity": 1, "id": { "orderId": null, "productId": 0 } };
    item.amount = cart.sub_amount;
    item.quantity = cart.quantity;
    item.id.orderId = null;
    item.id.productId = cart.id.product_id;
    return item;
  }


  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }

}
