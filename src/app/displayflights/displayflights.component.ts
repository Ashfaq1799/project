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
  @Input() travellers:number;
  flightslist:any;
  flight:Flight;
  constructor(private searchservice:FlightsearchService) { 
    // this.newUser=new Flight();
    // console.log(this.newUser);
    this.flight=new Flight();
  }

  redirect(schedule_id){
    sessionStorage.setItem("schedule_id",schedule_id);
    // sessionStorage.setItem("count",this.travellers.toString())
  }
  ngOnInit(): void {
  }

}
