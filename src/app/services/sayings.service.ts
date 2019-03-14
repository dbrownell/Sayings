import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Icategories } from '../shared/icategories';

@Injectable({
  providedIn: 'root'
})
export class SayingsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Icategories[]> {
    return this.http.get<Icategories[]>('/assets/data/categories.json');
  }
  getById(categoryId: number): Observable<Icategories> {
    return this.http
      .get<Icategories[]>('assets/products.json')
      .pipe(map(products => products.find(p => p.id === categoryId) as Icategories));
  }
}
