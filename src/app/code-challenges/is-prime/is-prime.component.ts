import { Component } from '@angular/core';

/**MODELS */
import { appRoutesNames } from '../../app-routes-names';
import { challengesRoutesNames } from '../code-challenges-routes-names';

@Component({
  selector: 'app-is-prime',
  template: `
  <div class="d-flex justify-content-between">
  <h3>{{ challengesRoutes.IS_PRIME_NUMBER.label }}</h3>
  <div>
    <a [routerLink]="'/' + appRoutes.CODE_CHALLENGES.route" class="btn btn-secondary">
      <i class="bi bi-chevron-left"></i>Back
    </a>
  </div>
</div>
<hr />

<div class="row">

  <div class="col-12 col-sm-6">
    <label for="primenumber" class="form-label fw-semibold">Type a Number:</label>
    <input 
      id="primenumber" 
      class="form-control input-number-only" 
      type="number" 
      maxlength="10" 
      minlength="1" 
      [(ngModel)]="numberToVerify"/>
  </div>

  <div class="col-12 col-sm-6">
    <label class="form-label fw-semibold">Is a Prime Number?</label>
    <input 
      readonly
      class="form-control" 
      [(ngModel)]="isPrimeNumber"/>
  </div>  
</div>
<button
  type="button"
  class="btn btn-primary mt-3 w-100"
  (click)="verifyNumber()"
>
  Test Number
</button>
`,
})
export class IsPrimeComponent {
  appRoutes = appRoutesNames;
  challengesRoutes = challengesRoutesNames;
  isPrimeNumber: boolean | null = null;
  numberToVerify: number | null = 0;

  verifyNumber(): void {
    if (!this.numberToVerify) {
      return;
    }
    this.isPrimeNumber = this.isPrime(this.numberToVerify);
  }

  private isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }
    if (n === 2 || n === 3 || n === 5 || n === 7) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }
    if (n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
      return false;
    }
    return true;
  }

  //GPT isPrime
  private calculateIsPrime(n: number): boolean {
    if (typeof n !== 'number' || n <= 1) {
      return false;
    }
    if (n <= 7 && n % 2 !== 0) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
