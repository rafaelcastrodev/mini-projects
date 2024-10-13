import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**MODELS */
import { appRoutesNames } from '../app-routes-names';
import { challengesRoutesNames } from './code-challenges-routes-names';

/**COMPONENTS */
import { CodeChallengesComponent } from './code-challenges.component';
import { CodeChallengesListComponent } from './list/code-challenges-list.component';
import { componentsObject } from './_index';

const routes: Routes = [
  {
    path: '',
    component: CodeChallengesComponent,
    children: [
      {
        path: 'list',
        component: CodeChallengesListComponent,
        title: `${appRoutesNames.CODE_CHALLENGES.route} List`,
      },
      {
        path: challengesRoutesNames.IS_PRIME_NUMBER.route,
        component: componentsObject.IsPrimeComponent,
        title: challengesRoutesNames.IS_PRIME_NUMBER.label,
      },
      {
        path: challengesRoutesNames.INVERT_STRING.route,
        component: componentsObject.InvertStringComponent,
        title: challengesRoutesNames.INVERT_STRING.label,
      },
      {
        path: challengesRoutesNames.IS_PALINDROME.route,
        component: componentsObject.IsPalindromeComponent,
        title: challengesRoutesNames.IS_PALINDROME.label,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeChallengesRoutingModule {}
