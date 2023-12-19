import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  mydata: MyDataType[] = [
    {"id":1, "name":"Saroj"},
    {"id":2, "name":"Suraj"},
    {"id":3, "name":"Santosh"},
    {"id":4, "name":"Susmita"},
    {"id":5, "name":"Sanjay"},
  ];
  constructor() { }

  getUsersForSubscription():Observable<MyDataType[]>
  {
    let data = new Observable<MyDataType[]>((observer: { next: (arg0: MyDataType[]) => void; }) => {
          setTimeout(() => {
            observer.next(this.mydata);
          }, 5000);
    });
    return data;
  }

}

export class MyDataType
{
  public id!: number ;
  public name!: string;
}