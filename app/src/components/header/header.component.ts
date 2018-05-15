import {Component, HostListener, OnInit} from '@angular/core';
import {CONFIG} from '../../configs/config';
import {HeaderStateService} from '../../services/header-state.service';
import {PAGES} from '../../pages/pages.config';
import {enumToArray} from '../../utils/enum-to-array';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  public navItems: any[] = enumToArray(PAGES);
  public canShowFullNav: boolean;
  public showMobileNav: boolean;

  constructor(private headerStateService: HeaderStateService) {
  }

  ngOnInit() {
    this.onResize();
    this.navItems.forEach(item => item.active = item.value === this.headerStateService.state.getValue().value);
  }

  public changeActiveNav(navItem: any): void {
    this.navItems.forEach(item => item.active = item === navItem);

    this.headerStateService.changeHeaderState(navItem);

    window.scrollTo(0, 0);

    this.closeMenu();
  }

  public openMenu(): void {
    this.showMobileNav = true;
  }

  public closeMenu(): void {
    this.showMobileNav = false;
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.canShowFullNav = window.innerWidth >= CONFIG.MOBILE_WIDTH;

    if (this.canShowFullNav) {
      this.closeMenu();
    }

  }
}
