import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm! : FormGroup
  submitted = false;

  constructor(private formBuilder : FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]]
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.forgotForm.valid){
    let reqData = {
      Email : this.forgotForm.value.email
    }
    console.log(reqData);
    this.user.forgetPassword(reqData).subscribe((response:any) =>{
      console.log(response);
      localStorage.setItem("token", response.data);
    });
    }
    
  }
}
