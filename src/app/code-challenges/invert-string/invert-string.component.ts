import { Component } from '@angular/core';

/**MODELS */
import { appRoutesNames } from '../../app-routes-names';
import { challengesRoutesNames } from '../code-challenges-routes-names';

@Component({
  selector: 'app-invert-string',
  template: `
  <div class="d-flex justify-content-between">
  <h3>{{ challengesRoutes.INVERT_STRING.label }}</h3>
  <div>
    <a [routerLink]="'/' + appRoutes.CODE_CHALLENGES.route" class="btn btn-secondary">
      <i class="bi bi-chevron-left"></i>Back
    </a>
  </div>
</div>
<hr />

<div class="row">

  <div class="col-12 col-sm-6">
    <label for="sourceString" class="form-label fw-semibold">Type anything:</label>
    <input 
      id="sourceString" 
      class="form-control input-number-only" 
      type="text" 
      maxlength="100" 
      minlength="2" 
      [(ngModel)]="sourceString"
      />
  </div>

  <div class="col-12 col-sm-6">
    <label class="form-label fw-semibold">Result:</label>
    <input 
      readonly
      class="form-control" 
      [(ngModel)]="invertedString"
      />
  </div>  
</div>
<button
  type="button"
  class="btn btn-primary mt-3 w-100"
  (click)="invertString()"
>
  Invert String
</button>
`,
})
export class InvertStringComponent {
  appRoutes = appRoutesNames;
  challengesRoutes = challengesRoutesNames;
  sourceString: string = '';
  invertedString: string = '';

  invertString() {
    if (!this.sourceString || typeof this.sourceString !== 'string') {
      return;
    }
    this.invertedString = '';
    for (let i = this.sourceString.length - 1; i >= 0; i--) {
      this.invertedString += this.sourceString[i];
    }
  }

  //GPT
  invert(str: string): string {
    if (!str || typeof str !== 'string') {
      return '';
    }
    return str.split('').reverse().join('');
  }
}
