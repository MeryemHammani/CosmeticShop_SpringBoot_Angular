import { Component } from '@angular/core';
import { SupportService } from '../../services/support.service';
import { Contact } from 'src/app/admin/models/contact';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.css']
})
export class UserFooterComponent {
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
