import { Component,OnInit } from '@angular/core';
import { Appoint } from '../appoint.model';
import {Subscription} from 'rxjs'
import { AppointService } from '../appoint.service';
@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.css']
})
export class AppointComponent implements OnInit {

appoints:Appoint[]=[]
private appointSub:Subscription
constructor(public appointService:AppointService){}
ngOnInit(): void {
  this.appoints=this.appointService.getAppoint()
  this.appointSub=this.appointService.getappointUpdateListener().subscribe((appoints:Appoint[])=>{
    this.appoints=appoints
  })
}
}
