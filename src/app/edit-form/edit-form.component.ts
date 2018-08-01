import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  public form:FormGroup;
  eye;
  typechange;
  data;
  constructor( private builder:FormBuilder,private routes:Router,private record:RecordsService) {
    this.data =record.getRecord();
    this.eye="glyphicon-eye-open";
    this.typechange="passowrd";
    this.showPassword()
    this.showPassword()
   // console.log(this.data)
    this.form =this.builder.group({
      firstName:[this.data.firstName,[Validators.required,Validators.pattern('[A-Za-z]*')]],
      lastName:[this.data.lastName,[Validators.required,Validators.pattern('[A-Za-z]*')]],
      email:[this.data.email,[Validators.required,Validators.email]],
      password:[this.data.password,[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
      cnf:[this.data.cnf],
      gender:[this.data.gender,Validators.required],
      contact:[this.data.contact,[Validators.required,Validators.pattern('[0-9].{9}')]],
      eid:[this.data.eid,[Validators.required,Validators.pattern('[0-9].{3}')]]
    });
   // console.log(this.form.controls['firstName'].errors);
   }
   storeData(){
     console.log(this.form.value);
    
     this.record.setRecord(this.form.value);
      this.routes.navigate(['/view'])
   
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
