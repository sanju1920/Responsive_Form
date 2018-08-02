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
  typeoffrom:string='Edit';
  eye;
  typechange;
  constructor( private builder:FormBuilder,private routes:Router,private record:RecordsService) {
    this.eye="glyphicon-eye-open";
    this.typechange="passowrd";
    this.showPassword()
    this.showPassword()
    var data = record.getRecord();
    
    if(data === undefined){
        data={
          firstName:'',
          lastName:'',
          email:'',
          passowrd:'',
          cnf:'',
          gender:'',
          contact:'',
          eid:''
        }
       this.typeoffrom ="Register"
    }
    this.form =this.builder.group({
      firstName:[data.firstName,[Validators.required,Validators.pattern('[A-Za-z]*')]],
      lastName:[data.firstName,[Validators.required,Validators.pattern('[A-Za-z]*')]],
      email:[data.email,[Validators.required,Validators.email]],
      password:[data.password,[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
      cnf:[data.cnf],
      gender:[data.gender,Validators.required],
      contact:[data.contact,[Validators.required,Validators.pattern('[0-9].{9}')]],
      eid:[data.eid,[Validators.required,Validators.pattern('[0-9].{3}')]]
    });
   
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
