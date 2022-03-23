import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    AngularMaterialModule,
    AccountPageRoutingModule,
   
  ],
  declarations: [AccountPage,MyProfileComponent, LoginComponent, SignupComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountPageModule {}
