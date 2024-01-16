import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/admin/services/contact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      fax: [null, Validators.required],
      email: [null, Validators.required],
      address: [null, Validators.required],
      instagram: [null, Validators.required],
      facebook: [null, Validators.required],
      youtube: [null, Validators.required],
    });
  }

  onSubmit() {
    let data = this.contactForm.value;
    this.contactService.saveContact(data).subscribe({
      next: (response: any) => {
        alert(" added succesfuly");
      },
      error: (err: any) => {
        alert(err);
      }
    });

  }
}
