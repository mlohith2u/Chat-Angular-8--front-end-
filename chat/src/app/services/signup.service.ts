import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { message } from '../Viewmodels/message';
import { userinfo } from '../Viewmodels/userinfo';
import { getmessage } from '../Viewmodels/getmessage';
import { Textanalysis } from '../Viewmodels/Textanalysis';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private readonly rootUrl = "http://localhost:19210";
  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(this.rootUrl + "/api/StudentDetails/PostRegistration", data);
  }
  userAuthentication(userName: any, password: any) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded;', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
    //return this.http.post(this.rootUrl + 'token', data, { headers: reqHeader });
  }
  forgotpassword(data: any) {
    return this.http.post(this.rootUrl + "/api/StudentDetails/PostEmail", data);
  }
  resetpassword(data: any) {
    return this.http.post(this.rootUrl + "/api/StudentDetails/PostUserInfoforResetpw", data);
  }

  sendmessage(data: message) {
    return this.http.post(this.rootUrl + "/api/Chat/SendMessage", data);
  }

  getusers(data: userinfo) {
    return this.http.post(this.rootUrl + "/api/Chat/Users", data);
  }

  getusermessage(data: getmessage) {
    return this.http.post(this.rootUrl + "/api/Chat/UsersMessage", data);
  }
  logout(data: getmessage) {
    return this.http.post(this.rootUrl + "/api/Chat/UsersLogged", data);

  }

  analysis(data: Textanalysis) {
    return this.http.post(this.rootUrl + "/api/Chat/AnalaysTest", data);

  }
}
