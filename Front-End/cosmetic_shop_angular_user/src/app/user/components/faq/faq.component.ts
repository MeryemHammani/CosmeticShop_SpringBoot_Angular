import { Component } from '@angular/core';

import { FaqServiceService } from '../../services/faq-service.service';
import { ActivatedRoute } from '@angular/router';
import { FaqItem } from 'src/app/admin/models/faqItem';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems!: FaqItem[];
  name!: string;

  constructor(private route: ActivatedRoute, private faqService: FaqServiceService) {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    this.getFaqItems(this.name);
  }

  public getFaqItems(name: string) {
    this.faqService.getFaqItems(name).subscribe({
      next: (response: any) => { this.faqItems = response },
      error: (err) => { console.log(err) }
    })
  }

}
