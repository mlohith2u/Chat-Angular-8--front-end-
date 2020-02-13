import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  private readonly rootUrl = "http://localhost:19210";

  constructor(private http:HttpClient) { }

  enroll(data:any){
    return this.http.post(this.rootUrl + "/api/StudentDetails/postStudentCourses",data);
  }
  getmycourses(data:any){
    return this.http.post(this.rootUrl+"/api/StudentDetails/postgetmycourses",data);
  }
  getCourseNames(){
    return this.http.get(this.rootUrl+"/api/StudentDetails/getCourses");
  }

}
