import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './pages/home.component';
import { OrderPipe } from './pipes/order.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    TableComponent,
    OrderPipe
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
