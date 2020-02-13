import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
risk = "riskmanagement";
angular = "angular";
quantum = "quantumcomputing";
spoken = "spoken";
blockchain = "blockchain";
ai = "artificialintelligence";
  constructor() { }

  ngOnInit() {
  }

}
