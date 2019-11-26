import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Common/home.component';
import { TutorialComponent } from './Components/Tutorial/tutorial.component';
import { RegisterComponent } from './Components/User/register.component';
import { LoginComponent } from './Components/User/login.component';
import { LogoutComponent } from './Components/User/logout.component';
import { AboutComponent } from './Components/Common/about.component';

const routes: Routes = [  
  { path: "Home", component: HomeComponent }, 
  { path: "About", component: AboutComponent },
  { path: "Logout" , component: LogoutComponent },
  { path: "Login" , component: LoginComponent },
  { path: "Tutorial", component: TutorialComponent},
  { path: "**", component: HomeComponent, pathMatch: 'full' },
  { path: "", redirectTo: "/Home", pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
