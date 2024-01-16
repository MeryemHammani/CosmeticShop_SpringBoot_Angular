import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user/services/user-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [

  ]
})
export class HeaderComponent {
  constructor(public userService: UserServiceService) {
  }

}
