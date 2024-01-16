import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/admin/models/User';
import { UserServiceService } from 'src/app/user/services/user-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  adminData!: User;
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    // Fetch user data from the UserServiceService and update adminData
    this.adminData = this.userService.getData();
  }

  saveChanges() {
    // Send an update request to the UserServiceService to update user data
    this.userService.update(this.adminData, '/UserUpdate');
    alert("admin updated succcefully");
  }

}
