import { Component } from '@angular/core';

/**MODELS */
import { appRoutesNames } from '../../app-routes-names';
import { challengesRoutesNames } from '../code-challenges-routes-names';

@Component({
  selector: 'app-invert-string',
  template: `
  <div class="d-flex justify-content-between">
  <h3>{{ challengesRoutes.IS_PALINDROME.label }}</h3>
  <div>
    <a [routerLink]="'/' + appRoutes.CODE_CHALLENGES.route" class="btn btn-secondary">
      <i class="bi bi-chevron-left"></i>Back
    </a>
  </div>
</div>
<hr />

<div class="row">

  <div class="col-12 col-sm-6">
    <label for="sourceString" class="form-label fw-semibold">Type possible Palindrome:</label>
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
      [(ngModel)]="isPalindrome"
      />
  </div>  
</div>
<button
  type="button"
  class="btn btn-primary mt-3 w-100"
  (click)="checkIsPalindrome()"
>
  Is Palindrome String
</button>
`,
})
export class IsPalindromeComponent {
  appRoutes = appRoutesNames;
  challengesRoutes = challengesRoutesNames;
  sourceString: string = '';
  isPalindrome: boolean | null = null;

  checkIsPalindrome() {
    const invertedString: string = this.invertString(this.sourceString);
    this.isPalindrome = this.sourceString === invertedString;
  }

  //GPT from invertString
  private invertString(str: string): string {
    if (!str || typeof str !== 'string') {
      return '';
    }
    return str.split('').reverse().join('');
  }

  //GPT
  verifyIsPalindrome() {
    if (!this.sourceString || typeof this.sourceString !== 'string') {
      return false;
    }
    const str: string = this.sourceString.toLocaleLowerCase();
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}
