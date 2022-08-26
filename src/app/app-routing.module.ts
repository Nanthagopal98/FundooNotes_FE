import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { GetnotesComponent } from './components/getnotes/getnotes.component';

const routes: Routes = [
  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot', component:ForgotPasswordComponent},
  {path:'reset/:token', component:ResetPasswordComponent},
  {path:'home', component:DashboardComponent,
  children:[
    {path:'', redirectTo:"/home/notes", pathMatch:'full' },
    {path:'notes', component:GetnotesComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
