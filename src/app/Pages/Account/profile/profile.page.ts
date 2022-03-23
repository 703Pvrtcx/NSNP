import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Account } from 'src/app/01_Models/account.model';
import { User } from 'src/app/01_Models/user';
import { UserInfo } from 'src/app/01_Models/userInfo';
import { UserInfoService } from 'src/app/Services/UserDetails/user-info.service';
import { AccountService } from 'src/app/Services/account/account.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userAccount: UserInfo;
  user = {} as User;

  constructor( private userService: UserInfoService,
    private asf: AngularFirestore,
    private auth: AngularFireAuth,
    private AccountService: AccountService,
    ) {
      this.userAccount = new UserInfo();
      this.setUserAccount(); 
      
      let account = new Account(this.userAccount);
      this.AccountService.setAccount(account);    
      
      console.log(this.userAccount);
    }

  ngOnInit() {
  }
  setUserAccount(){
     this.auth.authState.subscribe(user => {
    this.asf.collection("users").doc(user.uid).valueChanges().subscribe(data =>{      
      this.user.user_id = user.uid;
      this.user.firstname = data["firstname"];
      this.user.lastname =  data["lastname"];
      this.user.phone = data["phone"];
      this.user.gender = data["gender"];
      this.user.email =  data["email"];
      this.user.role_id = data["role_id"];
      this.user.photoURL = data["photoURL"];
      this.user.dob = data['dob'],
      this.user.address = data['address'],
      this.user.created_at =data['created_at'],
      this.user.updated_at =data['updated_at'],

      this.userAccount.overloadUser(
        this.user.user_id,
        this.user.firstname,
        this.user.lastname,
        this.user.phone,
        this.user.gender,
        this.user.email,
        this.user.role_id,
        this.user.photoURL,
        this.user.dob,
        this.user.address,
        this.user.created_at,
        this.user.updated_at
        );  
        let account = new Account(this.userAccount);
        this.AccountService.setAccount(account);
    })
  })
  }
}
