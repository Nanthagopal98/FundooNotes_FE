
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm! : FormGroup;
  submitted = false;
  token:any;

  constructor(private formBuilder : FormBuilder, private user:UserService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]  
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  onSubmit(){
    this.submitted = true;
    if(this.resetForm.valid){
      let reqData = {
        password : this.resetForm.value.password,
        confirmPassword : this.resetForm.value.confirmPassword
      }
      console.log(reqData);
      this.user.reset(reqData,this.token).subscribe((response:any) =>{
        console.log(response);
      });
    }
  }
}
