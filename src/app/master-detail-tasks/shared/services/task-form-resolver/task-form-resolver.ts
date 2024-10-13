import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';

// /**SERVICES */
import { TasksService } from '../tasks/tasks.service';

export const taskResolver = (route: ActivatedRouteSnapshot) => {
  const taskId = route.paramMap.get('id');

  if (!taskId) {
    return of(undefined);
  }

  return inject(TasksService).getTaskById(Number(taskId));
};
