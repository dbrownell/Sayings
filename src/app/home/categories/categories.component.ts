import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SayingsService } from '../../shared/services/sayings.service';
import { Icategories } from '../../shared/icategories';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {

  readonly categories$: Observable<Icategories[]>;

  constructor(private sayingsService: SayingsService, private route: ActivatedRoute) {
    this.categories$ = this.route.params.pipe(
      switchMap(({ category }) => this.getCategory(category))
    );
  }

  private getCategory(category: string): Observable<Icategories[]> {
    return category.toLowerCase() === 'all' ? this.sayingsService.getAllCategories() : null;
  }
}
