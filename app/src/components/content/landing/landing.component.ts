import {Component} from '@angular/core';
import {PAGES} from '../../../pages/pages.config';
import {HeaderStateService} from '../../../services/header-state.service';

@Component({
  selector: 'landing',
  templateUrl: 'landing.component.html'
})

export class LandingComponent {
  constructor(private headerStateService: HeaderStateService) {
  }

  public askQuotation(): void {
    this.headerStateService.changeHeaderState(PAGES.CONTACT);
  }

}
