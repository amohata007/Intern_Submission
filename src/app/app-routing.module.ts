import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path : "home", component: HomeComponent},
  {path : "booking", component: BookingComponent},
  {path: "mybookings", component: MybookingsComponent},
  {path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
