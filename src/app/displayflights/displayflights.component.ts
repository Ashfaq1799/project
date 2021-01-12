import { Component, Input, OnInit } from '@angular/core';
import { Display } from '../models/display.model';
import { Flight } from '../models/flightsearch.model.';
import { FlightsearchService } from '../services/flightsearch.service';

@Component({
  selector: 'app-displayflights',
  templateUrl: './displayflights.component.html',
  styleUrls: ['./displayflights.component.css']
})
export class DisplayflightsComponent implements OnInit {
  
  @Input() result_flights:Display[];
  @Input() return_flights:Display[];
  @Input() travellers:number;
  flightslist:any;
  flight:Flight;
  bookreturn:string="false";
  constructor(private searchservice:FlightsearchService) { 
    // this.newUser=new Flight();
    // console.log(this.newUser);
    this.flight=new Flight();
  }

  setforward(schedule_id){
    sessionStorage.setItem("schedule_id",schedule_id);
    // sessionStorage.setItem("count",this.travellers.toString())
  }
  setbackward(schedule_id){
    sessionStorage.setItem("return_schedule_id",schedule_id);
    // sessionStorage.setItem("count",this.travellers.toString())
  }
  setflag(){
    if(sessionStorage.getItem("return_date")!=""){
      sessionStorage.setItem("bookreturn","true");
    }
  }
  ngOnInit(): void {
    sessionStorage.setItem("bookreturn",this.bookreturn);
      // var dvPassport = document.getElementById("returnflights");
      // dvPassport.style.display =  sessionStorage.getItem("return_date")!='' ? "block" : "none";
  }

}
