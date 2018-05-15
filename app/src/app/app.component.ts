import {Component, HostListener} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {

    this._initLanguage();

  }

  private _initLanguage(): void {

    this.translateService.setDefaultLang('nl');

  }

  @HostListener('window:popstate')
  public onPopState() {
    console.log('Back button pressed');
  }

}
