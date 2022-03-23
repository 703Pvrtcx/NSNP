import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/01_Models/account.model';
import { AccountService } from 'src/app/Services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  index = 0;
  hasSignedUp: boolean;
  loggedIn: boolean = false;
  userAccount:Account;
  // student: Student;


  selected = 'other';
  type="login";
  submitError: string;
  signInForm: FormGroup;
  signUpForm: FormGroup;
  isEdit : boolean = false;

  
  constructor(
    private accountService:AccountService,
    private afs:AngularFirestore,
    private router: Router, 
    private auth: AngularFireAuth
    ) { }

ngOnInit() {
  }


}
