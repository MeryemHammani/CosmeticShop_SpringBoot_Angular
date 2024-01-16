import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../../services/support.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent {
  form!: FormGroup;
  constructor(public supportService: SupportService, private fb: FormBuilder) {
    this.form = this.fb.group({
      message: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  OnSaveReclamation() {
    this.supportService.addReclamation(this.form.value).subscribe({
      next: (response) => { alert("added successfuly") },
      error: (err) => { console.log(err) }

    });
  }
}
