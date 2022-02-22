import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { StatusCode } from 'src/app/utils/status-code';
import { Validation } from 'src/app/utils/validation.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  public loading: boolean;
  constructor(private formBuilder: FormBuilder,private authService:AuthenticationService,
    private router : Router,private notifier : NotifierService) {
    this.loading=false;
    this.resetForm = this.formBuilder.group(
      {
        
   password:[null, Validators.compose([        
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),       
       Validation.patternValidator(/\d/, { hasNumber: true }),       
       Validation.patternValidator(/[A-Z]/, { hasCapitalCase: true }),       
       Validation.patternValidator(/[a-z]/, { hasSmallCase: true }), 
  ])
],
        confirmPassword: ['', Validators.required]        
      },
      {
        validator: [Validation.match('password', 'confirmPassword')]
      }
    );
   } 


  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.resetForm.controls;
  }
  onSubmit(): void {
  {
    if (this.resetForm.invalid) {
      return;
    }
    this.loading=true;
 
  this.authService.resetPassword(this.resetForm.value).subscribe(data => {
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
