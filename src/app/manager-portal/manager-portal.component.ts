import { Component, OnInit,Input } from '@angular/core';
import { EmployeePortalService } from '../employee-portal.service';

@Component({
  selector: 'app-manager-portal',
  templateUrl: './manager-portal.component.html',
  styleUrls: ['./manager-portal.component.css']
})
export class ManagerPortalComponent implements OnInit {

  @Input()
  userBean:any;
  recordArray: [any];
  createflag: boolean;
  updateBean: any;
  updateFlag: boolean;
  fetchAllFlag:boolean;
  fetchId:number;
  constructor(private employeePortalService: EmployeePortalService) { }

  ngOnInit(): void {
    this.getAllRecords();
    console.log(this.userBean);
  }

  getAllRecords(): void {
    this.employeePortalService.getAllRecord().subscribe(resp => {
      console.log(resp, "res")
      this.recordArray = resp;
      this.fetchAllFlag = false;
      this.fetchId = undefined;
    },
      error => {
        console.log(error.error.text, "error");
        alert("Error in fetching data, Please reload");
      });
  }

  deleteRecord(employeeId: number) {
    console.log(employeeId);
    this.employeePortalService.deleteRecord(this.userBean.username,employeeId).subscribe(resp => {
      console.log("res");
      alert("Record deleted.")
      this.getAllRecords();
    },
      error => {
        alert("Error in deleting data, Please try again");
      });
  }

  fetchRecord() {
    this.employeePortalService.fetchRecord(this.fetchId).subscribe(resp => {
      console.log(resp, "res");
      this.recordArray = [resp];
      this.fetchAllFlag = true;
    },
      error => {
        alert("Error in fetching data, Please try again");
      });
  }

  createSubmit(value: any) {
    value = Object.assign( value , {addedby : this.userBean.username});
    console.log( value);
    this.employeePortalService.createRecord(value).subscribe(resp => {
      console.log(resp, "res");
      alert("Record Created");
      this.createflag = false;
      this.getAllRecords();
    },
      error => {
        console.log("error", error);
        alert("Error in fetching data");
      });
  }

  updateSubmit() {
    console.log(this.updateBean);
    this.updateBean.employeeId = "" + this.updateBean.employeeId;
    this.updateBean = Object.assign( this.updateBean , {addedby : this.userBean.username});
    this.employeePortalService.updateRecord(this.updateBean).subscribe(resp => {
      console.log(resp, "res");
      this.updateFlag = false;
      this.getAllRecords();
      alert("Record Updated");
    },
      error => {
        console.log("error", error);
        alert("Error in updating data, Please try again");
      });
  }

  logout(){
    this.employeePortalService.logout(this.userBean.username).subscribe(resp => {
      console.log(resp, "res");
      window.location.reload();
    },
      error => {
        console.log("error", error);
        alert("Error in login");
      });
  }

}
