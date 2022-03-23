import { AngularFireStorage } from '@angular/fire/compat/storage';

import { AccountService } from 'src/app/Services/account/account.service';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from 'src/app/01_Models/user';
import { finalize } from 'rxjs/operators';
import { UserInfo } from 'src/app/01_Models/userInfo';
import { Account } from 'src/app/01_Models/account.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userAccount= new UserInfo();
  user = {} as User;

  constructor(private firestore: AngularFirestore,
    private toastController:ToastController,
    private storage: AngularFireStorage,
    private auth: AngularFireAuth,
    private accountService: AccountService) { }

  async createNewUser(user:User){
    return await this.firestore.collection("users").doc(user.user_id).set({
      user_id: user.user_id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      gender: user.gender,
      phone: user.phone,
      photoURL: user.photoURL,
      role_id: user.role_id,
      dob: user.dob,
      address: user.address,
      created_at: user.created_at,
      updated_at: user.updated_at 
    })
  }
  async setUserAccount(){
    await this.auth.authState.subscribe(user => {
    this.firestore.collection("users").doc(user.uid).valueChanges().subscribe(data =>{      
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
        this.accountService.setAccount(account);
    })
  })
  }
  update_user(recordID, user) {
    return this.firestore.doc('Profile/' + recordID).update(user).then(res=>{
      //Successfull update
    }).catch(async error =>{
      let toast = await this.toastController.create({
        message: error.message,
        duration: 3000,
        color: "danger",
      })
      toast.present()
    })
  }

  userProfile(book){
    // this.asf.collection('Profiles').add(book).then(() => {
    //   //Successful
    //   alert('Account added successfully');
    // }).catch(err => { 
    //   alert(err.message + ' account was unable to be added!');
    // })
  }
  updateProfile(file) {

    
    const filePath = this.accountService.getAccount().getUserInfo().getUserID()
    const ref = this.storage.ref("Profile/" + filePath);
    const task = ref.put(file);
    task.snapshotChanges().pipe(finalize( () => {
  		ref.getDownloadURL().subscribe(url =>{
        this.firestore.collection("Profile").doc(this.accountService.getAccount().getUserInfo().getUserID()).update({
          photoURL: url,
        }).then(() => {
        }).catch(async error => {
          let toast = await this.toastController.create({
            message: error.message,
            duration: 3000,
            color: "danger",
          })
    
          toast.present()
        });

      })
  	})).subscribe()	
    
  }
  
}