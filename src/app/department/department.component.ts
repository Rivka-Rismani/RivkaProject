import {Component} from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { TaskService } from '../task.service';




 @Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent  {
  dataSource: Department[] = [];
  constructor(private departmentService: DepartmentService, private taskService: TaskService) {
    this.departmentService.getDepartments().subscribe(res => {
      if (res != null)
        this.dataSource = (res as any).department;   

    })

  }
  chooseDepartment(a:Department) {
    this.taskService.getTasksByDepartment.next(a.DepartmentId);
  }
}
