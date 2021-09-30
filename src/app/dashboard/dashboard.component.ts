import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from '../services/service.service';

export interface userModel {
  FirstName: string;
  LastName: string;
  Email : string;
  Password: string;
  Phone: number;
}

let USERS_Data : userModel[] = []

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   /** Interface Data  */
   table : boolean = false;

   displayedColumns: string[] = ['FirstName', 'LastName', 'Email', 'Password', 'Phone'];
   dataSource = USERS_Data;

  constructor(private customer : ServiceService) { 
    this.ftable()
  }

  ngOnInit(): void {
    this.ftable()
  }


  ftable(){
    
    this.customer.getData().subscribe(data =>{
      if(data){
        
        let length = JSON.parse(JSON.stringify(data)).length ;
        let user1 = JSON.parse(JSON.stringify(data)).user;

        let newData : userModel[] = []
        
        for(let i = 0 ; i < length ; i++){
          newData.push({ FirstName : user1[i].firstName, LastName : user1[i].lastName,Email:user1[i].email,Password:user1[i].password,Phone:user1[i].phone})
        }

        USERS_Data = newData
        this.table = true
        console.log(USERS_Data)
        this.dataSource = USERS_Data;

      }else{
        console.log("no")
      }
    })
  }

}
