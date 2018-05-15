import {Component} from '@angular/core';
import {SCORE} from '../../../configs/score.config';

@Component({
  selector: 'score',
  templateUrl: 'score.component.html'
})

export class ScoreComponent {

  public score = SCORE;

  constructor() {
  }
}
