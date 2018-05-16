import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AppRouterService} from '../modules/router/router.service';
import {PAGES} from '../pages/pages.config';

const HEADER_STATE_STORAGE_KEY = 'HEADER_STATE';

@Injectable()
export class HeaderStateService {

  public state: BehaviorSubject<any>;

  constructor(private appRouter: AppRouterService) {

    this.state = new BehaviorSubject<any>(this.getStateFromStorage());

    this.changeHeaderState(this.state.getValue());
  }

  public changeHeaderState(navItem: any): void {
    this.state.next(navItem);
    this.appRouter.navigateToPage(navItem.link);
    this.saveStateToStorage();
  }

  public saveStateToStorage(): void {
    sessionStorage.setItem(HEADER_STATE_STORAGE_KEY, JSON.stringify(this.state.getValue()));
  }

  public getStateFromStorage(): any {

    let headerState = PAGES.HOME;

    try {
      const parsedHeaderState = JSON.parse(sessionStorage.getItem(HEADER_STATE_STORAGE_KEY));
      if (parsedHeaderState) {
        headerState = parsedHeaderState;
      }
    } catch (ex) {
      console.log(ex);
    }
    return headerState;

  }
}
