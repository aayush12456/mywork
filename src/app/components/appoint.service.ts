import { Injectable } from '@angular/core';
import { Appoint } from './appoint.model';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppointService {

  constructor() { }
  private appoint:Appoint[]=[]
  private appointUpdate=new Subject<Appoint[]>()
  getAppoint(){
    return [...this.appoint]
  }
  getappointUpdateListener(){
    return this.appointUpdate.asObservable()
  }
  addAppoint(firstname:string,date:string){
  const appoint:Appoint={firstname:firstname,date:date}
  this.appoint.push(appoint)
  this.appointUpdate.next([...this.appoint])
  }
}
