import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/admin/models/User';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user: User;
  constructor(public userService: UserServiceService) {
    this.user = this.userService.getData();
  }


}
