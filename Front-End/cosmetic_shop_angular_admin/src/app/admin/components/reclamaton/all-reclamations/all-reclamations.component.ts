import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/admin/services/reclamation.service';


@Component({
  selector: 'app-reclamation-all',
  templateUrl: './all-reclamations.component.html',
  styleUrls: ['']
})
export class AllReclamationsComponent implements OnInit {
  reclamation: any[] = [];

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.reclamationService.getReclamations().subscribe(
      (data) => {
        this.reclamation = data;
      },
      (error) => {
        console.error('Error loading reclamations:', error);
      }
    );
  }

  deleteReclamation(id: number): void {
    this.reclamationService.deleteReclamation(id).subscribe(
      () => {
        this.reclamation = this.reclamation.filter((item) => item.id !== id);
        console.log('Reclamation deleted successfully.');
      },
      (error) => {
        console.error('Error deleting reclamation:', error);
      }
    );
  }
}

