import { Routes } from '@angular/router';

/**MODELS */
import { appRoutesNames } from './app-routes-names';

/**COMPONENTS */
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploaderComponent } from './uploader/uploader.component';
import { TextDetectionComponent } from './text-detection/text-detection.component';

export const routes: Routes = [
  {
    path: appRoutesNames.DASHBOARD.route,
    component: DashboardComponent,
  },
  {
    path: appRoutesNames.UPLOADER.route,
    component: UploaderComponent,
  },
  {
    path: appRoutesNames.TEXT_DETECTION.route,
    component: TextDetectionComponent,
  },
  {
    path: appRoutesNames.TASKS.route,
    loadChildren: () =>
      import('./master-detail-tasks/task.module').then((m) => m.TaskModule),
  },
  {
    path: appRoutesNames.CODE_CHALLENGES.route,
    loadChildren: () =>
      import('./code-challenges/code-challenges.module').then(
        (m) => m.CodeChallengesModule
      ),
  },
  {
    path: appRoutesNames.AUTH.route,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: appRoutesNames.DASHBOARD.route,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
