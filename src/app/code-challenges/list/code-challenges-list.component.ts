import { Component } from '@angular/core';

/**MODELS */
import { appRoutesNames } from '../../app-routes-names';
import { challengesRoutesNames } from '../code-challenges-routes-names';
import { NavRoute } from '../../shared/models/nav-route.interface';

@Component({
  selector: 'app-code-challenges',
  template: `
  <div class="d-flex justify-content-between">
  <h3>{{ appRoutes.CODE_CHALLENGES.label }}</h3>
  <div>
    <a [routerLink]="'/'+appRoutes.DASHBOARD.route" class="btn btn-secondary">
      <i class="bi bi-chevron-left"></i>Back
    </a>
  </div>
</div>
<hr />
<ul class="p-0" style="list-style: none;">
  <li *ngFor="let cr of challengeRoutes" class="mb-2">
    <a [routerLink]="'/'+appRoutes.CODE_CHALLENGES.route + '/' + cr.route" class="btn btn-primary pr-1"
      >{{ cr.label }}
      <i class="bi bi-chevron-right"></i>
    </a>
  </li>
</ul>`,
})
export class CodeChallengesListComponent {
  appRoutes = appRoutesNames;
  challengeRoutes: NavRoute[];

  constructor() {
    this.challengeRoutes = Object.values(challengesRoutesNames).map((item) => ({
      route: item.route,
      label: item.label,
    }));
  }
}
