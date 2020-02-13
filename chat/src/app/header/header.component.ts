import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { getmessage } from '../Viewmodels/getmessage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
status = 'notactive';
  responsive: any;
  navul: any;
  resp_nav: any;
  text: any;
  isLoggedIn: boolean;
  Fullname: string;
  logged: string;
  constructor(private router: Router,private register: SignupService   ) {
    this.logged=localStorage.getItem('IsLoggedIn');
    // localStorage.setItem('userToken', data.access_token);
    // localStorage.setItem('Fullname', data.fullName)
    this.Fullname=localStorage.getItem('Fullname');
   }
  

  onWindowScroll = (event): void => {
    var nav = document.getElementsByTagName('nav');
    this.responsive = document.getElementsByClassName('responsive-bar');
    if(document.documentElement.scrollTop>70){
      if(nav[0]){
        nav[0].setAttribute("id","shrink");
      }
      // this.navul = document.getElementsByClassName("active");
      // if(this.responsive[0] && this.navul[0]){
      //   this.navul[0].style.background = "rgba(0,0,0,0.8)";
      //   console.log(this.navul);
      // }
      
    }
    else{
      if(nav[0].id){
        nav[0].removeAttribute("id");
      }
      // this.navul = document.getElementsByClassName("active");
      // if(this.navul[0]){
      //   this.navul[0].style.background = "none";

      // }


    }
  }
  ngOnInit() {
    window.addEventListener('scroll', this.onWindowScroll, true);
    if(window.innerWidth>999){
      this.navul = document.getElementsByClassName('active')[0];
        if(this.navul){
          this.navul.style.background="none";
        }
    }
  }
  Logout() {
    this.isLoggedIn = false;
    localStorage.setItem("IsLoggedIn", "false");
    localStorage.removeItem('userToken');
    const usr: getmessage = {
      FromUser: localStorage.getItem("UserId"),
      ToUser:null
    };
    this.register.logout(usr).subscribe((Response: any) => {

    })
    this.router.navigate(['']);
  }
  onResize(e){
    if(window.innerWidth>999){
      this.navul = document.getElementsByClassName('active')[0];
        if(this.navul){
          this.navul.style.background="none";
        }
        else{
          this.navul = document.getElementsByClassName('notactive')[0];
          if(this.navul){
            this.navul.style.background="none";
          }
          this.text = document.getElementsByClassName("hero")[0];
      if(this.text){
        this.text.style.visibility = "visible";
      } 
        }
    }
else{
    this.navul = document.getElementsByClassName('active')[0];
        if(this.navul){
          this.navul.style.background="rgba(0,0,0,1)";
        }
    }
  }
  toggleFunction(e:any){
    this.resp_nav = document.getElementsByClassName('responsive-bar')[0];
    if(this.resp_nav){
      if(document.documentElement.scrollTop<70 && this.status=="notactive"){
        this.resp_nav.style.background="rgba(0,0,0,1)";
        setTimeout(() => {
          this.navul = document.getElementsByClassName('active')[0];
        if(this.navul){
          this.navul.style.background="rgba(0,0,0,1)";
        }
        }, 10);
      }
      else{
        this.resp_nav.style.background="rgba(0,0,0,1)";
        this.navul = document.getElementsByClassName('active')[0];
        if(this.navul){
          this.navul.style.background="rgba(0,0,0,1)";
        }
      }
    }
  
    
    
    if(this.status=='notactive'){
      this.status = 'active';
      this.text = document.getElementsByClassName("hero")[0];
      if(this.text){
        this.text.style.visibility = "hidden";
      }
    }
    else{
      this.text = document.getElementsByClassName("hero")[0];
      if(this.text){
        this.text.style.visibility = "visible";
      }
      this.status = 'notactive';
    }
    

    

    // if(document.documentElement.scrollTop>70){
    //   setTimeout(() => {
    //     this.resp_nav = document.getElementsByClassName("active");
    //     if(this.resp_nav[0]){
    //       this.resp_nav[0].style.background="rgba(0,0,0,0.8)";
    //     }
    //   }, 200);
     
    // }
    // else{
     
    //   this.resp_nav = document.getElementsByClassName("active");
    //   if(this.resp_nav[0]){
    //     this.resp_nav[0].style.background="none";
    //   }
    // }
  }

}
