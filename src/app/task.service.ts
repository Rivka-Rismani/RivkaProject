import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasksByEmployee=new Subject<number>();
  getTasksByDepartment=new Subject<number>();


  constructor(private httpClient: HttpClient) { }
  


  getTasks(): Observable<any> {
    return this.httpClient.get("assets/task.json")
      .pipe(map(res => {
        console.log(res);
        return res;
      }))

  }
}
