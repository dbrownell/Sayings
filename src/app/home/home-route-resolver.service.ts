import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SayingsService } from '../shared/services/sayings.service';

@Injectable({
  providedIn: 'root'
})
export class HomeRouteResolverService implements Resolve<any> {

  sayingTitle: string;
  constructor(private sayings: SayingsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.sayingTitle = route.params.sayingTitle;
    return this.sayings.getSayingsByCategory(this.sayingTitle);
  }
}

