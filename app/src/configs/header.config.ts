import {PAGES} from '../pages/pages.config';

export const HEADER_CONFIG = [
  {
    value: 'HEADER.NAV.HOME',
    active: true,
    link: PAGES.HOME.link
  },
  {
    value: 'HEADER.NAV.ABOUT',
    active: false,
    link: PAGES.ABOUT_US.link
  },
  {
    value: 'HEADER.NAV.FAQ',
    active: false,
    link: PAGES.FAQ.link
  },
  {
    value: 'HEADER.NAV.CONTACT',
    active: false,
    link: 'contact'
  }
];
