import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientsService } from '../patients.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  department= [
    {value: 'physician', viewValue: 'physician'},
    {value: 'Heart Specialist', viewValue: 'Heart Specialist'},
    {value: 'child specialist', viewValue: 'child specialist'},
  ];
  constructor(public patientsService:PatientsService){}
  onAddForm(form:NgForm){
  if(form.invalid){
  return
  }
  this.patientsService.addPatient(form.value.firstname, form.value.mobile,form.value.email,form.value.designation,form.value.radio,form.value.depart,form.value.date)
  console.log(form.value)
  form.resetForm()
  }
}
