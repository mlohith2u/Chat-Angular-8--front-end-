import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { message } from '../Viewmodels/message';
import { userinfo } from '../Viewmodels/userinfo';
import { getmessage } from '../Viewmodels/getmessage';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { Textanalysis } from '../Viewmodels/Textanalysis';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  txtMessage: any;
  message: any;
  AllMessages: any;
  messages: any;
  Users: any;
  userid: string;
  ToUser: any;
  name: any;
  currentuserinfo: any;
  flag: boolean;
  info: string;
  analysisdata: any;
  emotion=false;

  constructor(private register: SignupService, private router: Router) {
    this.userid = localStorage.getItem("UserId");
    this.flag = false;
  }
  ngOnInit() {
    this.GetUsers()
    this.txtMessage = null;
    const source = interval(1000);
    const text = 'Your Text Here';
    source.subscribe(val => {
      this.GetUsers();
      if (this.flag) {
        const usr: getmessage = {
          FromUser: this.userid,
          ToUser: localStorage.getItem("ToUsersinfo")
        };
        this.GetLatestMessage(usr);
        var elem = document.getElementById('msghistory');
        elem.scrollTop = elem.scrollHeight;
      }
    });

  }

  GetUsers() {
    const user: userinfo = {
      UserId: this.userid
    };
    this.register.getusers(user).subscribe((Response: any) => {
      this.Users = Response;

    })
  }

  OpenMessage(dat) {
    localStorage.setItem("ToUsersinfo", dat.customerID);
    // this.ToUser = dat.customerID;
    this.name = dat.fullName;
    const usr: getmessage = {
      FromUser: this.userid,
      ToUser: dat.customerID
    };
    // this.currentuserinfo = usr;
    // this.register.getusermessage(usr).subscribe((Response: any) => {
    //   this.messages = Response;
    //   this.flag = true;
    //   this.ToUser=this.ToUser;
    // })
    var data = localStorage.getItem("ToUsersinfo");
    if (data != null) {
      this.GetLatestMessage(usr);
    }
  }

  GetLatestMessage(dat) {
    // this.ToUser = dat.customerID;
    // this.name = dat.fullName;
    // const usr: getmessage = {
    //   FromUser: this.userid,
    //   ToUser: this.ToUser
    // };
    this.currentuserinfo = dat;
    this.register.getusermessage(dat).subscribe((Response: any) => {
      this.messages = Response;
      this.flag = true;
      this.ToUser = this.ToUser;
      var elem = document.getElementById('msghistory');
      elem.scrollTop = elem.scrollHeight;
    })
  }

  sendMessage() {
    this.ToUser = localStorage.getItem("ToUsersinfo");
    if (this.txtMessage != undefined && this.txtMessage != null) {
      if (this.ToUser != null && this.txtMessage != undefined) {
        const ms: message = {
          FromUser: this.userid,
          ToUser: this.ToUser,
          message: this.txtMessage,
          type: "sent",
          date: null,
          clientuniqueid: null
        }
        var emoji = document.getElementById("emotion").remove();
        // if(emoji){
        //   emoji.innerHTML = "";
        // }
        this.register.sendmessage(ms).subscribe((response: any) => {
          this.messages = response;
          this.txtMessage = null;
          var elem = document.getElementById('msghistory');
          elem.scrollTop = elem.scrollHeight;
          
        })
      }
      else {
        alert("Select User to Send Message!!!");
      }

    }

  }

  analysis(data) {
    if (this.txtMessage != undefined && this.txtMessage != null) {
      if(this.txtMessage.length>0)
      {
        this.emotion=true;
      }
      
    const ms: Textanalysis = {
      Texts: this.txtMessage
    }
    this.register.analysis(ms).subscribe((response: any) => {
      if(response=="positive")
      {
        this.analysisdata="<p style='font-size:100px;' >&#128522;</p>"
        var emoji = document.getElementById("emotion");
        if(emoji){
          emoji.innerHTML = this.analysisdata;
          this.emotion=false;
        }
      }else if(response=="neutral")
      {
        this.analysisdata="<p style='font-size:100px;'> &#128528;</p>"
        var emoji = document.getElementById("emotion");
        if(emoji){
          emoji.innerHTML = this.analysisdata;
          this.emotion=false;
        }
      }
      else if(response=="negative")
      {
        this.analysisdata="<p style='font-size:100px;'>&#128543;</p>"
        var emoji = document.getElementById("emotion");
        if(emoji){
          emoji.innerHTML = this.analysisdata;
          this.emotion=false;
        }
      }

    })
  }
}
}
