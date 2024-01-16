import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user/services/user-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public form!: FormGroup;
  public errorMessage!: string;

  constructor(private fb: FormBuilder, public userService: UserServiceService) {

    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: [null],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/)]],
      phone: [null, [Validators.required, Validators.pattern(/^(\+212|0)[5-7][0-9]{8}$/)]],
      city: [null],
      country: [null],
      roles: [[
        {
          "roleName": "User"
        }
      ]]
    });
  }


  onSubmitRegister() {
    let data = this.form.value;
    this.userService.connexion(data, '/register').subscribe({
      next: (response: any) => {
        this.userService.CompleteAuthentication(response);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = "Inscription échouée. Veuillez réessayer plus tard."
      }
    });

  }



}
