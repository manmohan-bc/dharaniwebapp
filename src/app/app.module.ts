import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Common/header.component';
import { FooterComponent } from './Components/Common/footer.component';
import { HomeComponent } from './Components/Common/home.component';
import { RegisterComponent } from './Components/User/register.component';
import { LoginComponent } from './Components/User/login.component';
import { TutorialComponent } from './Components/Tutorial/tutorial.component';
import { LogoutComponent } from './Components/User/logout.component';
import { AboutComponent } from './Components/Common/about.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomeComponent,
    TutorialComponent, LoginComponent, RegisterComponent, LogoutComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
