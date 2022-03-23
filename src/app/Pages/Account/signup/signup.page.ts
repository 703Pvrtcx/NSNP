import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/01_Models/user';
import { AuthenticationService } from 'src/app/Services/account/authentication.service';
import { UserInfoService } from 'src/app/Services/UserDetails/user-info.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public now: any = (new Date()).toISOString();

  user = {} as User;
  validation_messages = {
    'firstname': [
      { type: 'required', message: 'First name is required.' },
     // { type: 'pattern', message: 'Name must not contain speacial characters or number' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' },
     // { type: 'pattern', message: 'Name must not contain speacial characters or number' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'phone number is required.'},
      { type: 'minlength', message: 'Phone number must be 10 numbers long.' },
      { type: 'maxlength', message: 'Phone number must not exceed 10 numbers.' }
    ],

    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  
  signUpForm: FormGroup;
  submitError: string;
  constructor(private router:Router,
    public angularFire: AngularFireAuth,
    private userService: UserInfoService,
    private authService: AuthenticationService) {
      this.signUpForm = new FormGroup({
      
        'firstname': new FormControl('', Validators.compose([
          Validators.required,
          // Validators.pattern('^[a-zA-Z]')
        ])),
        'lastname': new FormControl('', Validators.compose([
          Validators.required,
          //Validators.pattern('^[a-zA-Z]')
        ])),
        'phone': new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern("^((\\+27-?)|0)?[0-9]{10}$"),
          Validators.minLength(10),
          Validators.maxLength(10)
        ])),
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
    this.signUpForm.reset();
  }
  async signUpWithEmail(){
       await this.authService.RegisterUser(this.signUpForm.value['email'], this.signUpForm.value['password'])
       .then(async ()=>{
           await this.angularFire.currentUser.then((m)=>{   
               this.user.user_id = m.uid; 
               this.user.firstname = this.signUpForm.value['firstname'];
               this.user.lastname =  this.signUpForm.value['lastname'];
               this.user.email = this.signUpForm.value['email'];
               this.user.phone = this.signUpForm.value['phone'],
               this.user.address = "Not Provided",
               this.user.dob = "Not Provided",
               this.user.gender = "Not Provided",
               this.user.role_id = "User",
               this.user.photoURL = "gs://nsnp-1841b.appspot.com/dp.png",
               this.user.created_at = this.now,
               this.user.updated_at = this.now
              this.userService.createNewUser(this.user);
           }).then(()=>{
              alert("Account for "+ this.user.email+" has been created successfully!");
           })
         

        // this.signUpForm.reset();
        
      }).catch(err=>{
        // alert(err.message + "jo");
      })
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 10 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}