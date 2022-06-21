import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './pages/home.component';
import { OrderPipe } from './pipes/order.pipe';
import { ErrorComponent } from './pages/error/error.component';


@NgModule({
  declarations: [
    HomeComponent,
    TableComponent,
    OrderPipe,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
