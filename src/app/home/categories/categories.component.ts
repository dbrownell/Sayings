import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SayingsService } from '../../shared/services/sayings.service';
import { Icategories } from '../../shared/icategories';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {

  readonly categories$: Observable<Icategories[]>;

  constructor(private sayingsService: SayingsService) {
    this.categories$ = this.getCategories();
    this.categories$.pipe(tap(a => a)).subscribe(a => console.log(a));
  }

  private getCategories(): Observable<Icategories[]> {
    return this.sayingsService.getAllCategories();
  }
}
