import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/account/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  validation_messages = {
    
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  submitError: string;
  signinForm: FormGroup;
  constructor(private router:Router, private authService: AuthenticationService) {
      this.signinForm = new FormGroup({
        'email': new FormControl('', Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
        ),
        'password': new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ]))
      });
    }
    ngOnInit() {
     
      this.signinForm.reset();
    }
   
    async signInWithEmail(){
      this.authService.SignIn(this.signinForm.value['email'], this.signinForm.value['password']).then((res)=>{
        console.log(res);
        
      })
        // this.router.navigateByUrl('update-profile');
    }


}

 
 


