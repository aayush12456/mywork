import { Component } from '@angular/core';
import {Subscription} from 'rxjs'
import { Patient } from '../patients.model';
import { PatientsService } from '../patients.service';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
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
