import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

/**MODELS */
import { TaskInterface } from '../../models/task.interface';
import { PaginationInterface } from '../../models/pagination.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private _http: HttpClient) {}

  getTasks(pagination?: any): Promise<PaginationInterface> {
    // const url: string = `./assets/data/tasks.json`;
    const url = `./assets/data/${this.mockPagination(pagination)}`;
    const queryParams = this.getRequestParams(pagination);
    return lastValueFrom(
      this._http.get<PaginationInterface>(url, { params: queryParams })
    );
  }

  getTaskById(id: string | number): Promise<TaskInterface> {
    const url: string = `./assets/data/${id}.json`;
    return lastValueFrom(this._http.get<TaskInterface>(url));
  }

  private getRequestParams(pagination: PaginationInterface): HttpParams {
    if (!pagination) {
      return new HttpParams();
    }
    const filters: { [key: string]: number | string } = {};
    pagination.requestParams?.forEach((rp) => {
      filters[rp.id] = rp.value;
    });

    return new HttpParams({ fromObject: filters });
  }

  private mockPagination(pagination?: PaginationInterface): string {
    let resource = `tasks${pagination?.page ? pagination?.page : 0}.json`;
    return resource;
  }
}
