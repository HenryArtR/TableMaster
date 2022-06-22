import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { OrderPipe } from './pipes/order.pipe';
import { ErrorComponent } from './pages/error/error.component';


@NgModule({
  declarations: [
    HomeComponent,
    OrderPipe,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
