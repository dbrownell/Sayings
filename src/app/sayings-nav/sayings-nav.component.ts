import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Isayings } from '../shared/isayings';
import { SayingsService } from '../shared/services/sayings.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sayings-nav',
  templateUrl: './sayings-nav.component.html',
  styleUrls: ['./sayings-nav.component.scss']
})
export class SayingsNavComponent {
  readonly sayings$: Observable<Isayings[]>;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sayingsService: SayingsService,
    private route: ActivatedRoute
  ) {
    this.sayings$ = this.route.params.pipe(
      switchMap(({ categoryTitle }) => this.getByCategory(categoryTitle))
    );
  }
  private getByCategory(categoryTitle: string): Observable<Isayings[]> {
    return this.sayingsService.getSayingsByCategory(categoryTitle);
  }
}
