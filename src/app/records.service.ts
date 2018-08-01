import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  data;

  constructor() { }
  setRecord(recievedata){
    this.data = recievedata;
    //console.log(this.data)
  }
  getRecord(){
    return this.data;
  }
}
