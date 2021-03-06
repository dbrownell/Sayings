import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Icategories } from '../shared/icategories';

@Component({
  selector: 'app-sayings-grid',
  templateUrl: './sayings-grid.component.html',
  styleUrls: ['./sayings-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SayingsGridComponent {
  @Input() categories: Icategories[];
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 2],
    ['md', 3],
    ['lg', 4],
    ['xl', 5]
  ]);

  constructor(private media: MediaObserver) {
    // If the initial screen size is xs ObservableMedia doesn't emit an event
    // and grid-list rendering fails. Once the following issue is closed, this
    // comment can be removed: https://github.com/angular/flex-layout/issues/388
    this.columns$ = this.media.media$.pipe(
      map(mc => this.breakpointsToColumnsNumber.get(mc.mqAlias) as number),
      startWith(3)
    );
  }
}
