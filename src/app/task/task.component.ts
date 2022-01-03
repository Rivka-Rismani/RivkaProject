import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../task';
import { TaskService } from '../task.service';



let DATA: any[] = [];
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit,AfterViewInit {
  dataSource: any[] = [];
  dataSource2 = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['TaskNumber', 'TaskName', 'StatusId', 'EmployeeName', 'DepartmentId', 'DueDate'];


  constructor(private taskService: TaskService) {

    this.taskService.getTasksByEmployee.subscribe(x => {
      this.getTasks(x, true)
    })
    this.taskService.getTasksByDepartment.subscribe(x => {
      this.getTasks(x, false)
    })
    this.getTasks(-1, true)




  }
  getTasks(id: number, isEmployee: boolean) {
    this.taskService.getTasks().subscribe(res => {
      if (res != null)
        this.dataSource = res;

      console.log(this.dataSource);
      DATA = [];
      let x = (this.dataSource as any).Tasks;
      for (let i = 0; i < x.length; i++) {
        if (id == -1)
          DATA.push(x[i]);
        else if (isEmployee == true && x[i].EmployeeId == id) {
          DATA.push(x[i]);
        }
        else if (isEmployee == false && x[i].DepartmentId == id) {
          DATA.push(x[i]);
        }


      };
      this.dataSource2 = new MatTableDataSource(DATA);
      this.dataSource2.paginator = this.paginator;

    })
  }
  ngOnInit(): void {
    debugger;

  }
  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
  }

}


