import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { tblStudentCours } from '../Viewmodels/tblstudentcours';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
ID = localStorage.CustomerId;
  mycourses: any;
  courses: any;
  constructor(private enrollservice:EnrollService) { }

  ngOnInit() {
  }
  getmycourse(){
    const data:tblStudentCours={
      CompletedOn:null,
      CompletionStatus:null,
      CourseId:null,
      DomainId:null,
      ID:null,
      IsDefault:null,
      StartedOn:null,
      StudentId:this.ID,
      TechnologyId:null
    }
    this.enrollservice.getmycourses(data).subscribe((response:any)=>{
      var table = document.getElementById("courses");
      if(table){
        table.style.display = "block";
      }
      this.mycourses = response;
      this.enrollservice.getCourseNames().subscribe((responsename:any)=>{
        this.courses = responsename;
        for(let i = 0 ; i<this.mycourses.length;i++){
          for(let j=0;j<this.courses.length;j++){
            if(this.mycourses[i].courseId == this.courses[j].id){
            this.mycourses[i].CourseName = this.courses[j].courseName;
            break;
            }
          }
        }
      });

      console.log(response);
    })
  }
}
