import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Icategories } from '../../shared/icategories';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SayingsService implements Resolve<any>{

  constructor(private http: HttpClient) { }
  resolve() {
    return this.getAll();
  }
  getAll(): Observable<Icategories[]> {
    return this.http.get<Icategories[]>('/assets/categories_data/categories-data.json');
  }
  getById(categoryId: number): Observable<Icategories> {
    return this.http
      .get<Icategories[]>('/assets/categories_data/categories-data.json')
      .pipe(map(categories => categories.find(c => c.id === categoryId) as Icategories));
  }
}
