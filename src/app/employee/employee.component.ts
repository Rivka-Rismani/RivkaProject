import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  dataSource: any[] = [];
  EmployeeName = "";
  dataSource2 = new MatFormFieldModule();
  DATA: Employee[] = [];
  selectedValue: number = 1;
  constructor(private employeeService: EmployeeService, private taskService: TaskService) {
    this.employeeService.getEmplyies().subscribe(res => {
      if (res != null)
        this.dataSource = res;
      console.log(this.dataSource);
      this.DATA = [];
      let x = (this.dataSource as any).Employee;
      for (let i = 0; i < x.length; i++) {
        this.DATA.push(x[i]);

      };

    })

  }

  ngOnInit(): void {
  }
  chooseEmployee() {
    debugger
    this.EmployeeName ="b";
    this.taskService.getTasksByEmployee.next(this.selectedValue);
  }

}
