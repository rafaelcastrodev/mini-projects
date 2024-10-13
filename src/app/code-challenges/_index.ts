import { InvertStringComponent } from './invert-string/invert-string.component';
import { IsPalindromeComponent } from './is-palindrome/is-palindrome.component';
import { IsPrimeComponent } from './is-prime/is-prime.component';

export const componentsArray: any[] = [
  IsPrimeComponent,
  InvertStringComponent,
  IsPalindromeComponent,
];

export const componentsObject: any = {
  IsPrimeComponent: IsPrimeComponent,
  InvertStringComponent: InvertStringComponent,
  IsPalindromeComponent: IsPalindromeComponent,
};
