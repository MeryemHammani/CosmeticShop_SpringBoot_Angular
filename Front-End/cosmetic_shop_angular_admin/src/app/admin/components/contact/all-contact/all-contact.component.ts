import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { ContactService } from 'src/app/admin/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
  contact: any[] = []; // Assuming contact is an array

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getAllContacts().subscribe({
      next: (data) => {
        this.contact = data;
      },
      error: (error) => {
        console.error('Error loading contacts:', error);
      },
    });
  }



}
