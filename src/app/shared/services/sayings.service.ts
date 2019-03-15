import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Icategories } from '../../shared/icategories';

@Injectable({
  providedIn: 'root'
})
export class SayingsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Icategories[]> {
    return this.http.get<Icategories[]>('/assets/categories_data/categories-data.json');
  }
  getById(categoryId: number): Observable<Icategories> {
    return this.http
      .get<Icategories[]>('/assets/categories_data/categories-data.json')
      .pipe(map(categories => categories.find(c => c.id === categoryId) as Icategories));
  }
  // getByCategory(category: string): Observable<Icategories[]> {
  //   return this.http.get<Icategories[]>('/assets/data/categories.json').pipe(
  //     map(categories => categories.filter(c => c.categories.includes(category))));
  // }
}
