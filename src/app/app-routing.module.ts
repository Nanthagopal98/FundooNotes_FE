import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { GetnotesComponent } from './components/getnotes/getnotes.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchievComponent } from './components/archiev/archiev.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:'full' },
  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot', component:ForgotPasswordComponent},
  {path:'reset/:token', component:ResetPasswordComponent},
  {path:'home', component:DashboardComponent,
  canActivate:[AuthguardGuard],
  children:[
    {path:'', redirectTo:"/home/notes", pathMatch:'full' },
    {path:'notes', component:GetnotesComponent},
    {path:'trash', component:TrashComponent},
    {path:'archiev', component:ArchievComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
