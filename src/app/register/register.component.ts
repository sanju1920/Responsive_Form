import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  public form:FormGroup;

  constructor( private builder:FormBuilder) {
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
     localStorage.setItem('data',JSON.stringify(this.form.value))
    //  var result =localStorage.getItem('data');
     //console.log(result);
   }

  

}
