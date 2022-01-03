export class Task {
    TaskNumber:number;
    TaskName:string;
    StatusId:number;
    EmployeeName:string;
    DepartmentId:number;
    DueDate:Date
    constructor( TaskNumber:number,TaskName:string,StatusId:number,EmployeeName:string,DepartmentId:number, DueDate:Date) {
        this.TaskNumber = TaskNumber;
        this.TaskName = TaskName;
        this.StatusId = StatusId;
        this.EmployeeName = EmployeeName;
        this.DepartmentId = DepartmentId;
        this.DueDate = DueDate;

    }
}
