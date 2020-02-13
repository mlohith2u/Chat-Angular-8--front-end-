import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PayuComponent } from './payu/payu.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "course", component: CourseComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "blog", component: SignupComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "resetpassword/:id", component: ResetpasswordComponent },
  { path: "payu/:id", component: PayuComponent },
  { path: "course/:id", component: CoursesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "chat", component: ChatComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
