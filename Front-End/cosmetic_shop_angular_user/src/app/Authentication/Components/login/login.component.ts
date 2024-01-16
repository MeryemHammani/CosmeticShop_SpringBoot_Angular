import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form!: FormGroup;
  public errorMessage!: string;

  constructor(private fb: FormBuilder, public userService: UserServiceService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitLogin() {
    let data = this.form.value;
    this.userService.connexion(data, '/login').subscribe({
      next: (response: any) => {
        this.userService.CompleteAuthentication(response);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = "Adresse e-mail ou mot de passe incorrect."
      }
    });
  }

}

