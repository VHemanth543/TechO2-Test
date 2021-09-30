import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user = this.services.Getuserdetails();
  constructor(private services : ServiceService) { }

  ngOnInit(): void {
    console.log(this.user)
  }
 
}
