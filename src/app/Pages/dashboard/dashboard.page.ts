import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/01_Models/account.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  loginStatus: boolean = false;

  isStudent: boolean = true;
  userAccount: Account;
  constructor(private router:Router) { 
    // this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

  navigateToAnnouncement(){
    this.router.navigateByUrl("studentannouncement")
  }
  changeState(){
    if (this.loginStatus) {
      this.loginStatus=false;
    } else {
      this.loginStatus=true;
    }
  }
  navigateToSearch(){
    this.router.navigateByUrl("search");
  }
}
