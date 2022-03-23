import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/account/authentication.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  loading: boolean = false;

  validation_messages = {
    'email': [
     { type: 'required', message: 'Please provide an email address used to register.' },
     { type: 'pattern', message: 'Please provide a valid email address.' }
   ],
 };
 form: FormGroup;
 submitError: string;
constructor(private router:Router, private authService: AuthenticationService) { 
  this.form =  new FormGroup({
    email: new FormControl('', Validators.compose([
     Validators.required,
     Validators.email,
     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
   ])
   ),
  });
 }
ngOnInit() {
  
  this.form.reset();
 
}
async submitProduct(){
  this.loading = true;
   await this.authService.ForgotPassword(this.form.value['email']).then(()=>{
     this.loading=false;
   })
}
}