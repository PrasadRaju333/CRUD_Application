import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  setData(key:string, val:any)
  {
    localStorage.setItem(key,JSON.stringify(val))
  }
  getData(key:string){
    return localStorage.getItem(key)
  }
}
