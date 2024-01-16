import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/admin/models/User';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userData: User;
  constructor(public service: SharedServiceService, private router: Router) {
    this.userData = this.service.authService.getAutUser();
  }


  //  this to transfer User data 


  setData(data: any) {
    this.userData = data;
  }

  getData() {
    return this.userData;
  }
  //login or register

  public connexion(data: any, path: string) {
    return this.service.post(data, path, false)
  }

  public CompleteAuthentication(response: any) {
    this.service.authService.setAuthInfo(response);
    this.router.navigate(['admin']);
  }


  //edit a user


  public update(data: any, path: string) {

    this.service.put(data, path).subscribe({
      next: (response: any) => {
        this.service.authService.setAuthInfo(response);
        this.setData(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  //logout
  public logout() {
    this.service.authService.clearAuthInfo();
    this.router.navigate(['user/login']);
  }

}
