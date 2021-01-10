import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { scheduled } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GetflightsComponent } from './getflights/getflights.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulelistComponent } from './schedulelist/schedulelist.component';
import { SeatLayoutComponent } from './seatlayout/seatlayout.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketpdfComponent } from './ticketpdf/ticketpdf.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent,canActivate:[AuthguardGuard]},
  {path:"Login",component:UserloginComponent},
  {path:"Profile",component:ProfileComponent},
  {path:"Add",component:AddcomponentComponent,canActivate:[AuthguardGuard]},
  {path:"Checkout",component:CheckoutComponent},
  {path:"seatlayout",component:SeatLayoutComponent},
  {path:"ticketgeneration",component:TicketComponent},
  {path:"pdfgeneration",component:TicketpdfComponent},
  // {path:"flight",component:UpdateflightComponent},
  // {path:"getflight",component:GetflightsComponent},
  // {path:"add",component:AddflightComponent},
  // {path:"addschedule",component:ScheduleComponent},
  // {path:"updatesch",component:UpdatescheduleComponent},
  // {path:"viewschedulelist",component:SchedulelistComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin',component:AdminComponent,children:[{path:'viewflight',component:GetflightsComponent}]},
  {path:'admin',component:AdminComponent,children:[{path:'addflight',component:AddflightComponent}]},
  {path:'admin',component:AdminComponent,children:[{path:'updateflight',component:UpdateflightComponent}]},
  {path:'admin',component:AdminComponent,children:[{path:'scheduleflight',component:ScheduleComponent}]},
  {path:'admin',component:AdminComponent,children:[{path:'schedulelist',component:SchedulelistComponent}]},
  {path:'admin',component:AdminComponent,children:[{path:'updateschedule',component:UpdatescheduleComponent}]}
];
// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'adminlogin'},
//   { path: 'adminlogin', component: AdminloginComponent },
//   { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
//   {path:'admin',component:AdminComponent,children:[
//     {path:'viewflight',component:FlightComponent}
//   ]},
//   // {path:'viewflight', component:FlightComponent},
//   {path:'admin',component:AdminComponent,children:[
//     {path:'addflight',component:AddflightComponent}
//   ]},
//   // {path:'addflight', component:AddflightComponent},
//   {path:'admin',component:AdminComponent,children:[
//     {path:'updateflight',component:UpdateflightComponent}
//   ]},
//   // {path:'updateflight',component:UpdateflightComponent},
//   {path:'admin',component:AdminComponent,children:[
//     {path:'deleteflight',component:DeleteflightComponent}
//   ]},
//   // {path:'deleteflight',component:DeleteflightComponent}
//   // {path:'admin',component:AdminComponent,children:[
//   //   {path:'scheduleflight',component:SchedulelistComponent}
//   // ]},
//   {path:'admin',component:AdminComponent,children:[
//     {path:'scheduleflight',component:ScheduleComponent}
//   ]},
//   {path:'admin',component:AdminComponent,children:[
//       {path:'schedulelist',component:SchedulelistComponent}
//     ]},
//     {path:'admin',component:AdminComponent,children:[
//       {path:'updateschedule',component:UpdatescheduleComponent}
//     ]}
 
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
