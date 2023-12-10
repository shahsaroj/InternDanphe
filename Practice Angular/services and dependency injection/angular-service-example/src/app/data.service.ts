import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data :string[]=[];

  constructor() { }
  setData(newData:string):void{
    this.data.push(newData);
  }
  getData():string[]{
    return this.data;
  }
}
