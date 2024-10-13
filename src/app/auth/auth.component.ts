import { Component } from '@angular/core';

/**MODELS */
import { appRoutesNames } from '../app-routes-names';
import { authRoutesNames } from './auth-routes-names';
import { NavRoute } from '../shared/models/nav-route.interface';

@Component({
  selector: 'app-auth',
  template: `
  <div class="d-flex justify-content-between">
  <h3>{{ appRoutes.AUTH.label }}</h3>
  <div>
    <a [routerLink]="'/'+appRoutes.DASHBOARD.route" class="btn btn-secondary">
      <i class="bi bi-chevron-left"></i>Back
    </a>
  </div>
</div>
<hr />
<div class="card mb-3">
  <div class="card-body d-inline-flex gap-3 flex-wrap justify-content-center">
    <small *ngFor="let ar of authRoutes">
      <a [routerLink]="ar.route">{{ ar.label }}</a>
    </small>
  </div>
</div>
  <router-outlet />
  `,
})
export class AuthComponent {
  appRoutes = appRoutesNames;
  authRoutes: NavRoute[];

  constructor() {
    this.authRoutes = Object.values(authRoutesNames).map((item) => ({
      route: item.route,
      label: item.label,
    }));
  }
}
