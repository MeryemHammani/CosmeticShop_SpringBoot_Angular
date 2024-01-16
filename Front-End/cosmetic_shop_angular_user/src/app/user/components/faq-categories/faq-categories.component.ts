import { Component } from '@angular/core';
import { Faq } from 'src/app/admin/models/faq';
import { FaqServiceService } from '../../services/faq-service.service';

@Component({
  selector: 'app-faq-categories',
  templateUrl: './faq-categories.component.html',
  styleUrls: ['./faq-categories.component.css']
})
export class FaqCategoriesComponent {
  faqCats!: Faq[];

  constructor(private faqService: FaqServiceService) {
    this.getFaqCategories();
  }

  public getFaqCategories() {
    this.faqService.getFaqCategories().subscribe({
      next: (response: any) => { this.faqCats = response },
      error: (err) => { console.log(err) }
    })
  }

}
