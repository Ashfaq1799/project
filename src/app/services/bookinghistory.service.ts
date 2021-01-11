import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookinghistoryService {

  constructor(public httpClient: HttpClient) {
   }
   public getBookingHistory(username:string, status:string)
   {
     return this.httpClient.get("http://localhost:62438/api/BookingHistory?username="+username+"&status="+status);
   }
}
