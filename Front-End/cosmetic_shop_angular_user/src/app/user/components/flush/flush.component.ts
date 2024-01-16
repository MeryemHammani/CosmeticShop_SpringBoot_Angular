import { Component, OnInit } from '@angular/core';
import { Flush } from 'src/app/admin/models/flush';
import { FlushServiceService } from '../../services/flush-service.service';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-flush',
  templateUrl: './flush.component.html',
  styleUrls: ['./flush.component.css']
})
export class FlushComponent implements OnInit {
  flushes!: Flush[];
  private intervalId: any;

  constructor(public flushservice: FlushServiceService, public prodService: ProductServiceService) { }
  ngOnInit() {
    this.getCurrentFlushes();
    this.calculateRemainingTime();

    this.intervalId = setInterval(() => {
      this.calculateRemainingTime();
    }, 1000); // Update every 1000 milliseconds (1 second)*/
  }


  public getCurrentFlushes() {

    this.flushservice.getCurrentFlushes().subscribe({
      next: (response: any) => {
        this.flushes = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  calculateRemainingTime() {
    // Check if flushes array is not empty
    if (this.flushes && this.flushes.length > 0) {
      const now = new Date().getTime(); // Current timestamp in milliseconds
      // Assuming each flush has a property 'endTime' that represents the end time of the flush
      this.flushes.forEach((flush: Flush) => {
        const endTime = new Date(flush.end_date).getTime(); // Convert 'endTime' to timestamp
        const remainingTime = endTime - now; // Calculate remaining time in milliseconds
        if (remainingTime <= 0) {
          this.flushservice.service.removeItem(flush.id, this.flushes);
          this.flushservice.endFlush(flush.id).subscribe();
          clearInterval(this.intervalId);//stop the timer  
        } else {
          const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
          const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

          // Display remaining time for each flush
          flush.remainingTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      });
    }
  }





}
