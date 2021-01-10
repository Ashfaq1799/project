import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private puthttp:HttpClient) { }
  public addbookingusingapi(booking)
  {
     return this.puthttp.post("http://localhost:62438/api/Booking",booking);
  }
}
