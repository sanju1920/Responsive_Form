import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent   {
  data ;
  constructor( private record:RecordsService,private routes:Router) {
    this.data=record.getRecord();
  //  console.log(this.data)
   }
   Edit(){
     this.routes.navigate(['/edit'])
   }
  
}
