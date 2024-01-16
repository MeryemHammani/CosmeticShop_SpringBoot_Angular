import { Component } from '@angular/core';
import { User } from 'src/app/admin/models/User';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-account-dashbord',
  templateUrl: './account-dashbord.component.html',
  styleUrls: ['./account-dashbord.component.css']
})
export class AccountDashbordComponent {
  user: User;
  constructor(private userService: UserServiceService) {
    this.user = this.userService.getData();
  }

}
