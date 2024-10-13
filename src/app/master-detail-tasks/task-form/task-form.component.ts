import { Component, OnInit, Input } from '@angular/core';

/**MODELS */
import { appRoutesNames } from '../../app-routes-names';
import { TaskInterface } from '../shared/models/task.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() task: TaskInterface | undefined = undefined;
  appRoutes = appRoutesNames;
  isNewTask: boolean = true;

  constructor() {}

  ngOnInit() {
    if (this.task) {
      this.isNewTask = false;
    }
  }
}
