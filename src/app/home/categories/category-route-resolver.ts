import { Resolve } from '@angular/router';
import { SayingsService } from 'src/app/shared/services/sayings.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryRouteResolver implements Resolve<any> {
  constructor(private sayings: SayingsService) {}
  resolve() {
    return this.sayings.getAllCategories();
  }
}
