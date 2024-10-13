import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**MODELS */
import { appRoutesNames } from '../app-routes-names';

/**COMPONENTS */
import { TaskComponent } from './task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

/**SERVICES */
import { taskResolver } from './shared/services/task-form-resolver/task-form-resolver';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children: [
      {
        path: 'list',
        component: TaskListComponent,
        title: `${appRoutesNames.TASKS.label} - List`,
        data: {
          queryParams: {
            page: {
              type: 'number',
              defaultValue: 1,
            },
            pagesize: {
              type: 'number',
              defaultValue: 10,
            },
            sortby: {
              type: 'string',
              defaultValue: 'name',
            },
          },
        },
      },
      {
        path: 'new',
        component: TaskFormComponent,
        title: `${appRoutesNames.TASKS.label} - New`,
      },
      {
        path: ':id/edit',
        component: TaskFormComponent,
        title: `${appRoutesNames.TASKS.label} - Task`,
        resolve: { task: taskResolver },
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
export class TaskRoutingModule {}
