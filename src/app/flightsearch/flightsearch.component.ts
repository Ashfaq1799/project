import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,NgForm,Validators} from '@angular/forms';
import { Flight } from '../models/flightsearch.model.';



import {FlightsearchService} from '../services/flightsearch.service';


@Component({
  selector: 'app-search-flight',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class SearchFlightComponent implements OnInit
 {
  flight:Flight;
  searchForm:FormGroup;
  msg:any;
  flights:any;
  classlist:string[];
  citylist:string[];

  

  //  sf(searchflight:NgForm) : void{
  //    console.log(searchflight.value);
  //  }

   constructor(private searchService:FlightsearchService)
   {
     this.flight=new Flight();
     this.citylist=["Chennai","Coimbatore","Hyderabad","Pune","Mumbai","Madurai","Delhi","Kolkata","Ahmedabad","Kochi","Bangalore","Chandigarh","Mysore","Goa"];
     this.classlist=["Economy","Premium","First","Business"];
     this.searchForm=new FormGroup({
      travel_date:new FormControl('',Validators.required),
      source_destination:new FormControl('',Validators.required),
      target_destination:new FormControl('',Validators.required),
      travellers:new FormControl('',Validators.required),
      flight_class:new FormControl('',Validators.required)
    })
   }

  

 onSubmit()
 {
   console.log(this.searchForm.value);
   console.log("fired");
   this.flight.travel_date=this.searchForm.get('travel_date')?.value;
   this.flight.source_destination=this.searchForm.get('source_destination')?.value;
   this.flight.target_destination=this.searchForm.get("target_destination")?.value;
   this.flight.travellers=this.searchForm.get("travellers")?.value;
   sessionStorage.setItem("count",this.flight.travellers.toString());
   sessionStorage.setItem("travel_date",this.flight.travel_date);
   console.log(this.flight.travel_date);
   
   this.searchService.getresultFlightsFromApi(this.flight.travel_date,this.flight.source_destination,this.flight.target_destination,this.flight.travellers).subscribe(
     data=>{this.flights=data,console.log(this.flights)},err=>err.error.Message);
   
   this.msg="flights fetched";
}
// get travellers(){return this.searchForm.get('travellers')}

ngOnInit():void{  }

}
