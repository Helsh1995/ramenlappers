import {Component} from '@angular/core';
import {FAQ} from '../../../configs/faq.config';

@Component({
  selector: 'faq',
  templateUrl: 'faq.component.html'
})

export class FAQComponent {

  public questions = FAQ;

  constructor() {
  }

  public toggleQuestion(question: any): void {
    this.questions.forEach(item => item === question ? item.open = !item.open : item.open = false);
  }
}
