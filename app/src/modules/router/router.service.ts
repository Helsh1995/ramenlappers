import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AppRouterService {

  public routeChange: BehaviorSubject<string>;

  constructor(private router: Router) {
    this.routeChange = new BehaviorSubject<string>('');
  }

  public navigateToPage(link: any): void {
    this.router.navigateByUrl(link);
    this.routeChange.next(link);
  }

  public getRoute(): string {
    return this.router.url;
  }

}
