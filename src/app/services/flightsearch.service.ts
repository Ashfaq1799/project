import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsearchService {

  constructor(private gethttp:HttpClient) { }
  public getAllFlightsFromApi(travel_date:string,source_destination:string,target_destination:string,travellers:number)
 {
     return this.gethttp.get("http://localhost:57707/api/Search?travel_date="+travel_date+"&source_destination="+source_destination+"&target_destination="+target_destination+"&traveller="+travellers);
 }
}
