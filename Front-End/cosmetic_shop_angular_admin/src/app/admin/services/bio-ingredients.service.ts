import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

import { BioIngredient } from '../models/bioIngredient';

@Injectable({
  providedIn: 'root'
})
export class BioIngredientsService {

  PATH_OF_API = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }
  addIngredients(Data: FormData): Observable<BioIngredient> {
    return this.http.post<BioIngredient>(this.PATH_OF_API + '/ingredients', Data);
  }


  getAllIngredients(): Observable<BioIngredient[]> {
    return this.http.get<BioIngredient[]>(this.PATH_OF_API + '/ingredients');
  }



  getIngredient(Id: number): Observable<BioIngredient> {
    const url = `${this.PATH_OF_API}/ingredients/${Id}`;
    return this.http.get<BioIngredient>(url);
  }
  getIngredientById(id: number): Observable<BioIngredient> {
    const url = `${this.PATH_OF_API}/ingredients/id/${id}`;
    return this.http.get<BioIngredient>(url);
  }

  updateIngredients(bio: BioIngredient): Observable<BioIngredient> {
    const url = `${this.PATH_OF_API}/ingredients/id/${bio.id}`;
    return this.http.put<BioIngredient>(url, bio);
  }

  deleteIngredient(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/ingredients/id/${id}`;
    return this.http.delete(url);
  }

  uploadImage(formData: FormData): Observable<any> {
    const url = `${this.PATH_OF_API}/ingredients/upload`;
    return this.http.post(url, formData);
  }
}
