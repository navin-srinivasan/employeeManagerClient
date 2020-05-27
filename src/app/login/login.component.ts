import { Component, OnInit } from '@angular/core';
import { Userlogin } from '../userlogin';
import { EmployeePortalService } from '../employee-portal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  switchflag: boolean;
  userModel = new Userlogin();
  loginmsg: String="";
  userBean:any;

  constructor(private employeePortalService: EmployeePortalService) { }

  ngOnInit(): void {
    this.switchflag = true;
  }

  onSubmit() {
    this.employeePortalService.login(this.userModel).subscribe(
      resp => {
        console.log(resp, "res")
         this.loginmsg = resp.loginCode;
         this.switchflag = false;
         this.userBean = resp;
      },
      error => {
        console.log(error, "error");
        alert("Error in logging in");
      })
  }
}
