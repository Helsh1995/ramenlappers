import {NgModule} from '@angular/core';
import {AboutUsComponent} from './content/about-us/about-us.component';
import {RatingsComponent} from './content/ratings/ratings.component';
import {ScoreComponent} from './content/score/score.component';
import {CallUsComponent} from './content/call_us/call_us.component';
import {WhyUsComponent} from './content/why_us/why_us.component';
import {FAQComponent} from './content/faq/faq.component';
import {QuotationComponent} from './content/quotation/quotation.component';
import {ContentComponent} from './content/content.component';
import {HeaderComponent} from './header/header.component';
import {ExtraInfoComponent} from './content/extra-info/extra-info.component';
import {WhatWeCleanComponent} from './content/what_we_clean/what_we_clean.component';
import {LandingComponent} from './content/landing/landing.component';
import {FooterComponent} from './content/footer/footer.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SWIPER_CONFIG, SwiperModule} from 'ngx-swiper-wrapper';
import {RATINGS_SWIPING} from '../configs/ratings_swiping.config';
import {FormsModule} from '@angular/forms';

const components = [
  HeaderComponent,
  ContentComponent,
  LandingComponent,
  CallUsComponent,
  WhyUsComponent,
  WhatWeCleanComponent,
  RatingsComponent,
  QuotationComponent,
  FooterComponent,
  AboutUsComponent,
  ScoreComponent,
  FAQComponent,
  ExtraInfoComponent
];

const modules = [CommonModule, FormsModule, TranslateModule, SwiperModule];

@NgModule({
  imports: [
    modules
  ],
  exports: [components],
  declarations: [components],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: RATINGS_SWIPING
    }
  ],
})
export class ComponentsModule {
}
