import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service'
import { Validation } from 'src/app/utils/validation.model';
import { StatusCode } from 'src/app/utils/status-code';
import {NotifierService} from 'angular-notifier'
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  form: FormGroup;
  public loading: boolean;
  constructor(private formBuilder: FormBuilder,private authService:AuthenticationService,
    private router : Router,private notifier : NotifierService) {
    this.loading=false;
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        confirmPassword: ['', Validators.required]
        // acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validator: [Validation.match('password', 'confirmPassword')]
      }

    );
   }
  
  ngOnInit(): void {
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
  {
    if (this.form.invalid) {
      return;
    }
    this.loading=true;
 
  this.authService.userRegistration(this.form.value).subscribe(data => {
   debugger
    console.log(data);
    if(data.processingStatus.statusCode=== StatusCode[StatusCode.Success]){  
          
      this.router.navigate(['adminlogin']);
    }
    else {
      this.notifier.notify('info', data.processingStatus.message);
    }
    this.loading=false;
  },
  error=>{
    
    this.loading=false;
  })   
  }
}
}