import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { tblStudentDetails } from '../Viewmodels/signup';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
id:any;
  constructor(private register:SignupService,private route:Router,private router:ActivatedRoute) {
    this.router.params.subscribe((data:any)=>{
      this.id = data['id'];
    })
   }

  ngOnInit() {
  }

  submit(form:NgForm){
    if(form.controls['password'].value != form.controls['cpassword'].value){
      alert("Password do not match");

    }
    else{
    const data:tblStudentDetails={
      Address:null,
      CityAddress:null,
      CollegeName:null,
      ContactNumber:null,
      CreatedOn:null,
      DateofBirth:null,
      DescribeYourbusiness:null,
      Email:null,
      FullName:null,
      Gender:null,
      ID:this.id,
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
    this.register.resetpassword(data).subscribe((response:any)=>{
      console.log(response);
        this.route.navigate(['/signin']);
    });
  }
}

}
