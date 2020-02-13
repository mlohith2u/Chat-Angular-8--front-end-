import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { tblStudentDetails } from '../Viewmodels/signup';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLoginError: boolean;

  constructor(private loginservice: SignupService, private router: Router) { }

  ngOnInit() {
  }
  submit(form: NgForm) {

    const data: tblStudentDetails = {
      Address: null,
      CityAddress: null,
      CollegeName: null,
      ContactNumber: null,
      CreatedOn: null,
      DateofBirth: null,
      DescribeYourbusiness: null,
      Email: form.controls['email'].value,
      FullName: null + " " + null,
      Gender: null,
      ID: null,
      IsApproved: null,
      IsEnabled: 1,
      Occupation: null,
      Password: form.controls['password'].value,
      Qualification: null,
      Role: null,
      StreetAddress: null,
      StudentType: null,
      StudentUID: null
    }

    this.loginservice.userAuthentication(data.Email, data.Password).subscribe((data: any) => {
      localStorage.CustomerId = data.CustomerId;
      localStorage.setItem("LogId", data.LogId);
      localStorage.setItem('UserId', data.CustomerId);
      localStorage.setItem('IsLoggedIn', "true");
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('Fullname', data.fullName)
      this.isLoginError = false;
      this.router.navigate(['/chat']);
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
      // alert("Invalid Username and Password!!!");
    }
    );

  }

}
