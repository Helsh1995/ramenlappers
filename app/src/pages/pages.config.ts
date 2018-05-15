import {HomePage} from './home/home.page';
import {FaqPage} from './faq/faq.page';
import {AboutUsPage} from './about-us/about-us.page';

export const PAGES = {
  HOME: {
    component: HomePage,
    link: '',
    value: 'HEADER.NAV.HOME',
    active: true
  },
  FAQ: {
    component: FaqPage,
    link: 'faq',
    value: 'HEADER.NAV.FAQ',
    active: false
  },
  ABOUT_US: {
    component: AboutUsPage,
    link: 'about-us',
    value: 'HEADER.NAV.ABOUT',
    active: false
  },
  CONTACT: {
    component: HomePage,
    value: 'HEADER.NAV.CONTACT',
    active: false,
    link: 'contact'
  }
};
