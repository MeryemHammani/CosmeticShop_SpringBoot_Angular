import { Component } from '@angular/core';
import { UserService } from 'src/app/admin/services/user.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {

      }
    });
  }


  deleteUser(categoryId: number) {
    if (confirm('Are you sure you want to delete this User?')) {
      this.userService.deleteUser(categoryId).subscribe({
        next: () => {
          alert("user delted succesfuly");
          this.fetchUsers();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }


}
