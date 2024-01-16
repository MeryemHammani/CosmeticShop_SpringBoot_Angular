import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/admin/services/contact.service';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {

    this.contactService.getContactById(1).subscribe({
      next: (data) => {
        this.contact = data;
      },
      error: (error) => {
        console.error('Error loading contact details:', error);
      },
      complete: () => {

      }
    });

  }

  updateContact(): void {
    this.contactService.updateContact(this.contact).subscribe({
      next: () => {
        alert("Updated");
        this.router.navigate(['/contacts']);
      },
      error: (error) => {
        console.error('Error updating contact:', error);
      },
    });
  }

}

