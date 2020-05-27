import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManagerPortalComponent } from './manager-portal/manager-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerPortalComponent,
    EmployeePortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
