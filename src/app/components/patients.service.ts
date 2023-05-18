import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { Patient } from './patients.model';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  constructor() { }
  private patients:Patient[]=[]
  private patientsUpdate=new Subject<Patient[]>()
  getPatient(){
    return [...this.patients]
  }
  getpatientUpdateListener(){
    return this.patientsUpdate.asObservable()
  }
  addPatient(firstname:string, mobile:number,email:string,designation:string,radio:string,depart:string,date:string){
  const patient:Patient={
    firstname: firstname, mobile: mobile, email: email, designation: designation, radio:radio, depart: depart, date: date,
  }
  this.patients.push(patient)
  this.patientsUpdate.next([...this.patients])
  }
}
