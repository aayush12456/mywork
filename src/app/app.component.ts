
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { PatientComponent } from './components/patient/patient.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private dialog:MatDialog){

}
openDialog(){
  this.dialog.open(DialogComponent)
}
openDialog1(){
  this.dialog.open(PatientComponent)
}
}
