import { Component,OnInit } from '@angular/core';
import {Subscription} from 'rxjs'
import { Patient } from '../patients.model';
import { PatientsService } from '../patients.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients:Patient[]=[]
  private patientsSub:Subscription
  constructor(public patientsService:PatientsService){}
  ngOnInit(): void {
    this.patients=this.patientsService.getPatient()
    this.patientsSub=this.patientsService. getpatientUpdateListener().subscribe((patients:Patient[])=>{
      this.patients=patients
    })
  }
}
