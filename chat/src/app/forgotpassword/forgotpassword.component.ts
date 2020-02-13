import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tblStudentDetails } from '../Viewmodels/signup';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private register:SignupService,private route:Router) { }

  ngOnInit() {
  }

  submit(form:NgForm){
    const data:tblStudentDetails={
      Address:null,
      CityAddress:null,
      CollegeName:null,
      ContactNumber:null,
      CreatedOn:null,
      DateofBirth:null,
      DescribeYourbusiness:null,
      Email:form.controls['email'].value,
      FullName:null,
      Gender:null,
      ID:null,
      IsApproved:null,
      IsEnabled:1,
      Occupation:null,
      Password:null,
      Qualification:null,
      Role:null,
      StreetAddress:null,
      StudentType:null,
      StudentUID:null
    }
    this.register.forgotpassword(data).subscribe((response:any)=>{
     
        alert("Click on the link sent to your given mail");
        this.route.navigate(['']);
    
    });
  }

}
