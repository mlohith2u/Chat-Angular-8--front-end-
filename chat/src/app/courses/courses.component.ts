import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tblStudentCours } from '../Viewmodels/tblstudentcours';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
coursename:any;
header:any;
  constructor(private route:ActivatedRoute,private enrollservice:EnrollService,private router:Router) { 
    this.route.params.subscribe((response)=>{
      this.coursename = response['id'];
     
    });
  }

  ngOnInit() {
    var risk = document.getElementById("riskmanagement");
    var angular = document.getElementById("angular");
    var quantum = document.getElementById("quantum");
    var spoken = document.getElementById("spoken");
    var blockchain = document.getElementById("blockchain");
    var ai  = document.getElementById("AI");
    if(this.coursename == "riskmanagement"){
      risk.style.display = "block";
      angular.style.display = "none";
      quantum.style.display = "none";
      spoken.style.display = "none";
      blockchain.style.display = "none";
      ai.style.display = "none";

    }
    else  if(this.coursename == "angular"){
      risk.style.display = "none";
      angular.style.display = "block";
      quantum.style.display = "none";
      spoken.style.display = "none";
      blockchain.style.display = "none";
      ai.style.display = "none";

    }
    else  if(this.coursename == "quantumcomputing"){
      risk.style.display = "none";
      angular.style.display = "none";
      quantum.style.display = "block";
      spoken.style.display = "none";
      blockchain.style.display = "none";
      ai.style.display = "none";

    }
    else  if(this.coursename == "spoken"){
      risk.style.display = "none";
      angular.style.display = "none";
      quantum.style.display = "none";
      spoken.style.display = "block";
      blockchain.style.display = "none";
      ai.style.display = "none";

    }
    else  if(this.coursename == "blockchain"){
      risk.style.display = "none";
      angular.style.display = "none";
      quantum.style.display = "none";
      spoken.style.display = "none";
      blockchain.style.display = "block";
      ai.style.display = "none";

    }
    else  if(this.coursename == "artificialintelligence"){
      risk.style.display = "none";
      angular.style.display = "none";
      quantum.style.display = "none";
      spoken.style.display = "none";
      blockchain.style.display = "none";
      ai.style.display = "block";

    }
    this.header = document.getElementsByTagName("nav")[0];
    if(this.header){
      this.header.style.backgroundColor = "rgba(0,0,0,0.8)";
    }
  }

  enroll(id:any){
    const data:tblStudentCours={
      CompletedOn:null,
      CompletionStatus:null,
      CourseId:id,
      DomainId:null,
      ID:null,
      IsDefault:null,
      StartedOn:null,
      StudentId:localStorage.CustomerId,
      TechnologyId:null
    }

    this.enrollservice.enroll(data).subscribe((data:any)=>{
      this.router.navigate(['/dashboard']);
    })
  }
}
