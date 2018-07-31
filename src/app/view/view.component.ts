import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent   {
  data = JSON.parse(localStorage.getItem('data'));
  constructor() { }
  t='ok';
  
  

}
