import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OderService } from 'src/app/admin/services/oder.service';
import { ProductService } from 'src/app/admin/services/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: any;
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OderService,
    private productService: ProductService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const orderId = +params['orderId'];
      this.fetchOrderDetails(orderId);
    });
  }

  fetchOrderDetails(orderId: number): void {
    this.orderService.getOrderById(orderId).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        this.order = response;
        this.fetchProductDetails();
      },
      error: (error: any) => {
        console.error('Error fetching orders:', error);
      }
    });
  }


  fetchProductDetails(): void {
    const productIds = this.order.orderItems.map((item: any) => item.id.productId);

    productIds.forEach((productId: number) => {
      this.productService.getProductById(productId).subscribe({
        next: (productResponse: any) => {
          console.log('Product Response:', productResponse);
          const productWithQuantity = {
            products: productResponse,
            quantity: this.order.orderItems.find((item: any) => item.id.productId === productId).quantity
          };
          this.products.push(productWithQuantity);
        },
        error: (error: any) => {
          console.error('Error fetching product details:', error);
        }
      });
    });
  }



  confirmOrder(item: any): void {
    this.orderService.updateOrder({ ...item, status: "confirmed" }).subscribe({
      next: (event: any) => {

        this.router.navigate(['/confirmed-orders']);
        this.updateProductQuantities(item);


      },
      error: (error) => {
        console.error(error);
      }
    });

  }


  updateProductQuantities(order: any): void {
    // Iterate through the ordered items
    order.orderItems.forEach((orderItem: any) => {
      const productId = orderItem.id.productId;
      const orderedQuantity = orderItem.quantity;

      // Fetch the product from the database by productId (You'll need to implement this)
      this.productService.getProductById(productId).subscribe((productResponse: any) => {
        const product = productResponse;

        // Calculate the new quantity after deducting the ordered quantity
        const newQuantity = product.quantity - orderedQuantity;

        // Update the product quantity in the database
        this.productService.updateProductQuantity(productId, newQuantity).subscribe((response: any) => {
          // Handle the response if needed
          console.log(`Updated quantity for product ${productId} to ${newQuantity}`);
        });
      });
    });
  }

  processOrder(item: any): void {
    this.orderService.updateOrder({ ...item, status: "processing" }).subscribe({
      next: (event: any) => {
        this.router.navigate(['/processing-orders']);

      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deliverOrder(item: any): void {
    // Simulate delivering the order
    this.orderService.updateOrder({ ...item, status: "delivred" }).subscribe({
      next: (event: any) => {
        this.router.navigate(['/delivred-orders']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


}
