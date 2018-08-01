import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RecordsService } from '../records.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  public form:FormGroup;
  eye;
  typechange;
  constructor( private builder:FormBuilder,private routes:Router,private record:RecordsService) {
    this.eye="glyphicon-eye-open";
    this.typechange="passowrd";
    this.showPassword()
    this.showPassword()

    this.form =this.builder.group({
      firstName:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      lastName:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
      cnf:[''],
      gender:['',Validators.required],
      contact:['',[Validators.required,Validators.pattern('[0-9].{9}')]],
      eid:['',[Validators.required,Validators.pattern('[0-9].{3}')]]
    });
   // console.log(this.form.controls['firstName'].errors);
   }
   storeData(){
     console.log(this.form.value);
     this.record.setRecord(this.form.value)
    this.routes.navigate(["/view"]);
   }
   showPassword(){
     
    if(this.eye=="glyphicon-eye-open"){
            this.typechange="text";
            
    }else{
      this.typechange="password";
      
    }
    if(this.eye=="glyphicon-eye-open"){
      this.eye="glyphicon-eye-close"
      
}else{
  this.eye="glyphicon-eye-open"

}
   }
  

}
