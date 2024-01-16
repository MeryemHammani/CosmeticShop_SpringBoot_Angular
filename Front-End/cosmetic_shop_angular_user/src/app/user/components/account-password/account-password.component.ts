import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.css']
})
export class AccountPasswordComponent {

  public form!: FormGroup;



  constructor(private fb: FormBuilder, public userService: UserServiceService) {
    this.form = this.fb.group({
      old_email: ["", [Validators.required, Validators.email]],
      old_pass: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/)]],
      new_email: ["", [Validators.required, Validators.email]],
      new_pass: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/)]],

    });
  }


  public onEdit() {
    let data = this.form.value;
    this.userService.update(data, '/UpdateCredential');
  }
}
