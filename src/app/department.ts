export class Department {
    DepartmentId:number;
    DepartmentName:string;
    ParentId:number

    constructor(DepartmentId: number,DepartmentName:string,ParentId:number) {
        this.DepartmentId = DepartmentId;
        this.DepartmentName = DepartmentName;
        this.ParentId = ParentId;
    }
}
