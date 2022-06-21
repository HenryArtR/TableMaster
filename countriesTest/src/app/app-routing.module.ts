import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './home/pages/error/error.component';
import { HomeComponent } from './home/pages/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Error404', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
