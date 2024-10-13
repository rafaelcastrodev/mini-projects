import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

/**MODELS */
import { appRoutesNames } from '../app-routes-names';
import { NavRoute } from '../shared/models/nav-route.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [RouterModule, NgFor],
})
export class DashboardComponent {
  appRoutesNames = appRoutesNames;
  appRoutes: NavRoute[];

  constructor() {
    const routes: NavRoute[] = Object.values(appRoutesNames).map((item) => ({
      route: item.route,
      label: item.label,
    }));
    this.appRoutes = routes.filter((route) => route.route !== 'dashboard');
  }
}
