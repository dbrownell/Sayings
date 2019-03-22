import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Icategories } from '../../shared/icategories';
import { Isayings } from '../isayings';
@Injectable({
  providedIn: 'root'
})
export class SayingsService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Icategories[]> {
    return this.http.get<Icategories[]>('/assets/categories_data/categories-data.json');
  }

  getSayingsByCategory(sayingTitle: string): Observable<Isayings[]> {
    return this.http.get<Isayings[]>('/assets/sayings_data/sayings-data.json').pipe(
      map(sayings => sayings.filter(p => p.categories.includes(sayingTitle))));
  }
}
