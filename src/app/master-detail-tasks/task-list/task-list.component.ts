import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**MODELS */
import { appRoutesNames } from '../../app-routes-names';
import { PaginationInterface } from '../shared/models/pagination.interface';

/**SERVICES */
import { TasksService } from '../shared/services/tasks/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  appRoutes = appRoutesNames;
  resource!: PaginationInterface;

  constructor(private _router: Router, private _taskService: TasksService) {}

  ngOnInit() {
    this.getTasks();
  }

  clickOnAction(t: any) {
    this.navigateToTask(t.id);
  }

  async navigateToTask(id: number | string) {
    await this._router.navigate([`tasks/${id}/edit`]);
  }

  gotoPage(page: number) {
    const pagination: PaginationInterface = { page: page };
    this.getTasks(pagination);
  }

  private async getTasks(pagination?: PaginationInterface) {
    try {
      this.resource = await this._taskService.getTasks(pagination);
    } catch (e) {
      alert(e);
    } finally {
      //End loading
    }
  }
}
