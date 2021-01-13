import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReturnfareService {

  constructor(private httpclient:HttpClient) { }
  public getreturnfare(schedule_id:number)
  {
   return this.httpclient.get("http://localhost:62438/api/ReturnFare/"+schedule_id);
  }
}
