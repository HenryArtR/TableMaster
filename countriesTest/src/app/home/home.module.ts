import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    HomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
