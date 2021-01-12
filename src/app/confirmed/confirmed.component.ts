import { Component, OnInit } from '@angular/core';
import { bookedTicket } from '../models/BookingHistory.model';
import { BookinghistoryService } from '../services/bookinghistory.service';
import { CancelticketService } from '../services/cancelticket.service';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {

  bookedtickets:any;
  sta:string;
  msg:any;
  msgs:any;
  b:any;
  username:string=sessionStorage.getItem("username");
  status:string="upcoming";
  data:any;
  constructor(private bookinghistory:BookinghistoryService,public cancelticket:CancelticketService) { 
    this.bookedtickets=new bookedTicket();
    this.bookinghistory.getBookingHistory(this.username,this.status).subscribe(u=>this.bookedtickets=u);
  }

  ngOnInit(): void {
    
  }

  onCancel(ticket:bookedTicket)
  {
    var res = confirm("Are you sure you need to cancel the ticket");
    if(res){
      this.cancelticket.cancel(ticket).subscribe(u=>this.data=u);
    }
    // this.reload();
    // alert("ticket deleted");
  }

  reload(){
    this.bookinghistory.getBookingHistory(this.username,this.status).subscribe(u=>this.bookedtickets=u);
  }
}