import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payu',
  templateUrl: './payu.component.html',
  styleUrls: ['./payu.component.css']
})
export class PayuComponent implements OnInit {
coursename:any;
amount:any;
business:any;
name:any;
email:any;
mobile:any;
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe((response)=>{
      this.coursename = response['id'];
    })
   }

  ngOnInit() {
  }

}
