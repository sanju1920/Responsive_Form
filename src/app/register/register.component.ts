import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() { }
 register:FormGroup = new FormGroup({
   firstName: new FormControl(''),
   lastName: new FormControl(''),
   Email: new FormControl(''),
   password: new FormControl(''),
   repassword: new FormControl(''),
   contact: new FormControl(''),
   gender: new FormControl(''),
   Eid: new FormControl('')
 });


}
