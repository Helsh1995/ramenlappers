import {Component} from '@angular/core';
import {WHAT_WE_CLEAN} from '../../../configs/what_we_clean.config';

@Component({
  selector: 'what-we-clean',
  templateUrl: 'what_we_clean.component.html'
})

export class WhatWeCleanComponent {

  public options = WHAT_WE_CLEAN;
  constructor() {
  }
}
