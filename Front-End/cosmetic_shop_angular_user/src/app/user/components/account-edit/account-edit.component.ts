import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/admin/models/User';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent {

  public form!: FormGroup;
  user: User;



  constructor(private fb: FormBuilder, public userService: UserServiceService) {
    this.user = this.userService.getData();

    this.form = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: ["0", Validators.required],
      gender: [this.user.gender],
      phone: [this.user.phone, [Validators.required, Validators.pattern(/^(\+212|0)[5-7][0-9]{8}$/)]],
      city: [this.user.city],
      country: [this.user.country]
    });

  }


  public onEdit() {
    let data = this.form.value;
    this.userService.update(data, '/UserUpdate');
  }
}
