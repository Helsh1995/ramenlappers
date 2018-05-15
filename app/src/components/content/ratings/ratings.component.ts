import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {RATINGS} from '../../../configs/ratings.config';
import {SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'ratings',
  templateUrl: 'ratings.component.html'
})

export class RatingsComponent implements OnInit {

  @ViewChild(SwiperComponent) swiper: SwiperComponent;

  public ratings = RATINGS;
  public config: SwiperConfigInterface;

  constructor() {
  }

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  public onResize(): void {

    this.config = {navigation: window.innerWidth >= 600};

  }

}
