import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/account/authentication.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  validation_messages = {
     'email': [
      { type: 'required', message: 'Please provide an email address used to register.' },
      { type: 'pattern', message: 'Please provide a valid email address.' }
    ],
  };
  form: FormGroup;
  submitError: string;
 constructor(private router:Router, private authService: AuthenticationService ) { 
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
   await this.authService.SendVerificationMail().then(res=>{ 
       this.form.reset();
      this.router.navigateByUrl("signin");
  })
  }
}