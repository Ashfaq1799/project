import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private gethttp:HttpClient) { }

  public getAllFlightsFromApi()
  {
      return this.gethttp.get("http://localhost:62438/api/Flight");
  }
  public addFlightUsingApi(flight:Flight)
  {
      return this.gethttp.post("http://localhost:62438/api/Flight",flight);
  }
  public updateFlightUsingApi(id:number,flight:Flight)
{
  return this.gethttp.put("http://localhost:62438/api/Flight/"+id,flight);
}
}
