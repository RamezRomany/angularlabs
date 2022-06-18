import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveform :FormGroup;

  constructor() {
    this.reactiveform = new FormGroup({
      Name: new FormControl("", [Validators.required ,Validators.maxLength(30)]),
      email: new FormControl("", [Validators.required]),
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      Cpassword: new FormControl("", [Validators.required])
    })
   }
   register(){
    if(this.reactiveform.controls['password'].value!==this.reactiveform.controls['Cpassword'].value)
    {
console.log("password not matched");
  }
else{
  console.log("Register is Done");
}}
  ngOnInit(): void {
  }

}

