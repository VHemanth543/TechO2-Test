import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message : string = ""
  FirstName:string = ""; LastName:string = ""; Type:string="";Email:string="";Password:string="";conPassword:string="";Phone:number=0;
  constructor(private serv : ServiceService) { }

  ngOnInit(): void {
  }

  register(){

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(this.FirstName == "" || this.LastName == "" || this.Email == "" || this.Type == "" || this.Password == ""){
      this.message = " Fill  All the Necessary fields with * symbol. Please fill all the necessary fields !"
    }
    
    else if(!this.Email.match(validRegex)){
      this.message = " Please enter a valid Email Id . Ex : companynameXXXXX@gmail.com"
    }
    else{
      var newData ={
        firstName : this.FirstName,
        lastName : this.LastName,
        Type : this.Type,
        email : this.Email,
        Password : this.Password,
        phone : this.Phone

      }

      this.serv.setData(newData).subscribe((user) =>{
        if(user){
          
          console.log("successfully sent to server");
          console.log(user);
          
          this.message = " \t" + user.code + "\t" + user.message
          alert(user.message)
        }
      },
      (err) => {
        if(err){
          console.log(err)
          
        }
      })
    

    }
    
  }

}
