import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {AppRouterService} from './router.service';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [AppRouterService],
})
export class AppRouterModule {
}
