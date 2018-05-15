import {Routes} from '@angular/router';
import {PAGES} from '../../pages/pages.config';

export const ROUTES: Routes = [

  {path: PAGES.HOME.link, component: PAGES.HOME.component},
  {path: PAGES.FAQ.link, component: PAGES.FAQ.component},
  {path: PAGES.ABOUT_US.link, component: PAGES.ABOUT_US.component},
  {path: PAGES.CONTACT.link, component: PAGES.CONTACT.component},
  {path: '**', redirectTo: ''}

];
