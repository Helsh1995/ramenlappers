import {NgModule} from '@angular/core';
import {HomePage} from './home/home.page';
import {ComponentsModule} from '../components/components.module';
import {CommonModule} from '@angular/common';
import {FaqPage} from './faq/faq.page';
import {AboutUsPage} from './about-us/about-us.page';
import {ScrollToModule} from 'ng2-scroll-to-el';

const pages = [HomePage, FaqPage, AboutUsPage];

@NgModule({
  imports: [CommonModule, ComponentsModule, ScrollToModule.forRoot()],
  exports: [pages],
  declarations: [pages],
  providers: [],
})
export class PagesModule {
}
