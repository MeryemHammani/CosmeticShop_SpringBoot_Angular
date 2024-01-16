import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';
import { ProductServiceService } from '../../services/product-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  public form!: FormGroup;

  constructor(public userService: AuthServiceService, public prodService: ProductServiceService, private route: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      search: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCountCarts();
  }


  public getCountCarts() {
    this.prodService.getProductCartCount().subscribe({
      next: (response: any) => { this.prodService.setCount(response.count) },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public naigateToSearch() {
    let search = this.form.controls['search'].value
    if (search.trim() !== '') {
      this.route.navigate(['user/search/' + search]);
    }
  }

  public logout() {
    this.userService.clearAuthInfo();
    this.route.navigate(['user/login']);
  }
}

