import {Component} from '@angular/core';
import {AppRouterService} from '../../modules/router/router.service';
import {PAGES} from '../pages.config';
import {ScrollToService} from 'ng2-scroll-to-el';

@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html'
})

export class HomePage {

  constructor(private appRouterService: AppRouterService,
              private scrollService: ScrollToService) {

    this.appRouterService.routeChange.subscribe((link) => {
      this._scrollToQuotation(link.length && link.indexOf(PAGES.CONTACT.link) > -1);
    });

  }

  private _scrollToQuotation(isContact: boolean): void {

    if (isContact) {

      setTimeout(() => {
        const quotation = document.getElementsByClassName('quotation');

        if (quotation[0]) {
          this.scrollService.scrollTo(<HTMLElement> quotation[0], 850, -75);
        }
      }, 500);

    }
  }
}
