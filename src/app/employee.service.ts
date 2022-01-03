import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmplyies(): Observable<any> {
    return this.httpClient.get("assets/employee.json")
      .pipe(map(res => {
        console.log(res);
        return res;
      }))

  }
}


