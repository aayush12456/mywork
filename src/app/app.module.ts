import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component'
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PatientComponent } from './components/patient/patient.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointComponent } from './components/appoint/appoint.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientsService } from './components/patients.service';
import { BillingComponent } from './components/billing/billing.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    PatientComponent,
    AppointComponent,
    PatientsComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  providers: [PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
