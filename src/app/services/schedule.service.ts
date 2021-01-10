import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/Schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http:HttpClient) { }
  public getflightidfromapi() {  
    return this.http.get("http://localhost:62438/api/Schedule");  
        
} 
public addScheduleUsingApi(schedule:Schedule)
    {
        return this.http.post("http://localhost:62438/api/Schedule",schedule);
    }

public getschedulefromapi() {  
    return this.http.get("http://localhost:62438/api/ViewSchedule");  
        
} 
public updateScheduleUsingApi(id:number,schedule:Schedule)
{
    return this.http.put("http://localhost:62438/api/ViewSchedule/"+id,schedule);
}
}
