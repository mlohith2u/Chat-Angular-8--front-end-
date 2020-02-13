import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tblStudentDetails } from '../Viewmodels/signup';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private register:SignupService,private route:Router) { }

  ngOnInit() {
  }

  submit(form:NgForm){
    const data:tblStudentDetails={
      Address:null,
      CityAddress:null,
      CollegeName:null,
      ContactNumber:form.controls['mobile'].value,
      CreatedOn:null,
      DateofBirth:null,
      DescribeYourbusiness:null,
      Email:form.controls['email'].value,
      FullName:form.controls['firstname'].value + " " + form.controls['lastname'].value,
      Gender:null,
      ID:null,
      IsApproved:null,
      IsEnabled:1,
      Occupation:null,
      Password:form.controls['password'].value,
      Qualification:null,
      Role:null,
      StreetAddress:null,
      StudentType:null,
      StudentUID:null
    }
    this.register.register(data).subscribe((response:any)=>{
      if(response==0){
        this.route.navigate(['/signin']);
      }
      if(response==2){
        alert("Entered Email is alredy present");
        location.reload();
      }
      if(response==1){
        alert("Entered Phone Number is alredy present");
        location.reload();
      }
    });
  }

}
