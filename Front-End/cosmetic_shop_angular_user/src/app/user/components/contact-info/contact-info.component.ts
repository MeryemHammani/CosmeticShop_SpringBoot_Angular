import { Component } from '@angular/core';
import { Contact } from 'src/app/admin/models/contact';
import { SupportService } from '../../services/support.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  contact!: Contact;
  constructor(private supportService: SupportService) {
    this.getContacts();
  }

  public getContacts() {
    this.supportService.getContacts().subscribe({
      next: (response: any) => {
        this.contact = response[0];
      },
      error: (err) => { console.log(err) }
    });
  }
}
