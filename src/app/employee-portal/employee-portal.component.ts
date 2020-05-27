import { Component, OnInit } from '@angular/core';
import { EmployeePortalService } from '../employee-portal.service';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent implements OnInit {

  recordArray: [any];
  fetchAllFlag:boolean;
  fetchId:number;

  constructor(private employeePortalService: EmployeePortalService) { }

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords(): void {
    console.log('caled')
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

}
