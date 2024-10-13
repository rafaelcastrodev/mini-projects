import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { RouterModule } from '@angular/router';

/**COMPONENTS */
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TaskRoutingModule,
    LoadingSpinnerComponent,
  ],
  declarations: [TaskComponent, TaskListComponent, TaskFormComponent],
})
export class TaskModule {}
