import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  UserEmail: string = ""; UserPassword:string = "";AdminEmail:string = "";AdminPassword:string = "";

  constructor(private serve : ServiceService, private rout : Router) { }

  ngOnInit(): void {
  }

  Userlogin(){
      var path = {
        email : this.UserEmail,
        password : this.UserPassword 
      }

      this.serve.userLogin(path).subscribe(user =>{
        if(user){
          console.log("Login Success Full")
          console.log(user)
         let  user1 = user.user
          let  userData= {
            FirstName: user1.firstName,
            LastName : user1.lastName,
            Email : user1.email,
            Phone : user1.phone
          }
          console.log(userData)
          this.serve.Setuserdetails(userData)
          this.rout.navigate(['/user-dashboard'])
         
          
        }
        else{
          console.log("failure")
        }
      })

  }

  Adminlogin(){
    var path = {
      email : this.AdminEmail,
      password : this.AdminPassword 
    }

    this.serve.userLogin(path).subscribe(user =>{
      if(user){
        console.log("Login Success Full")
        console.log(user)
        this.rout.navigate(['/dashboard'])
        
      }
      else{
        console.log("failure")
      }
    })

}
}
