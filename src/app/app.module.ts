import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';





import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    // MatTreeModule,
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
