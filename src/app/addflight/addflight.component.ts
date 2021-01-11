import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  flight:Flight;
  statusvalid:string[];
  msg:string;
  city:string[];
  submitted=false;
  constructor(private flightservice:FlightService) {
    this.flight=new Flight();
    this.msg="";
    this.statusvalid=["Servicable","Under-Maintainance","Discarded"];
    this.city=["Chennai","Coimbatore","Hyderabad","Pune","Mumbai","Madurai","Delhi","Kolkata","Ahmedabad","Kochi","Bangalore","Chandigarh","Mysore","Goa"];
  }
   InsertFlight()
   {
     this.flightservice.addFlightUsingApi(this.flight).subscribe(data=>console.log(data),err=>err.error.Message);
     this.msg="Values added";
   }
   Add(flight:Flight)
  {
this.submitted=true;
this.flightservice.addFlightUsingApi(flight).subscribe(data=>console.log(data),err=>err.error.Message);
this.msg="Values added";
  }
  ngOnInit(): void {
  }

}
