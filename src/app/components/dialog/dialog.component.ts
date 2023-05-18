import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointService } from '../appoint.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  department= [
    {value: '0', viewValue: 'physician'},
    {value: '1', viewValue: 'Heart Specialist'},
    {value: '2', viewValue: 'child specialist'},
  ];
  constructor(public appointService:AppointService){}
onAddForm(form:NgForm){
if(form.invalid){
return
}
this.appointService.addAppoint(form.value.firstname,form.value.date)
console.log(form.value)
form.resetForm()
}
}
