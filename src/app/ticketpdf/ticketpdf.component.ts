import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { DOCUMENT } from '@angular/common';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';
import { ReturnticketService } from '../services/returnticket.service';

@Component({
  selector: 'app-ticketpdf',
  templateUrl: './ticketpdf.component.html',
  styleUrls: ['./ticketpdf.component.css']
})
export class TicketpdfComponent implements OnInit {
  passengersid:number[]=[];
  seatnumbers:string[]=[];
  returnseatnumbers:string[]=[];
  ticket:Ticket;
  returnticket:Ticket;
  result:any;
  tickets:any;
  returntickets:any;
  returnresult:any;
  isclicked:boolean=false;
  id:number=parseInt(sessionStorage.getItem("booking_id"));
  return_id:number=parseInt(sessionStorage.getItem("return_booking_id"));
  
  constructor(private ticketService:TicketService,private returnticketservice:ReturnticketService) {
    
   }
  download()
  {
    var element=document.getElementById('divid');
    html2canvas(element).then((canvas)=>{
      console.log(canvas)
      var imgData=canvas.toDataURL('image/png')
      var imgHeight=canvas.height*280/canvas.width;
      var doc=new jspdf()

      doc.addImage(imgData,0,0,280,imgHeight)
      doc.save("ticket.pdf")
    })
  }
  showtickets(){
    this.isclicked=true;
    this.ticketService.getticketsusingapi(this.id).subscribe(data=>this.tickets=data);
    this.returnticketservice.getreturnticketsusingapi(this.return_id).subscribe(data=>this.returntickets=data);
  }
  ngOnInit(): void {
    this.passengersid= JSON.parse(sessionStorage.getItem("passengers"));
    this.seatnumbers= JSON.parse(sessionStorage.getItem("seatnos"));

    this.returnseatnumbers = JSON.parse(sessionStorage.getItem("returnseatnos"));

    // console.log(parseInt(sessionStorage.getItem("booking_id")));
    for(let index=0;index<this.seatnumbers.length;index++){
      this.ticket = new Ticket();
      this.ticket.travel_date=sessionStorage.getItem("travel_date");
      this.ticket.seat_no=this.seatnumbers[index];
      this.ticket.passenger_id = this.passengersid[index];
      this.ticket.booking_id = parseInt(sessionStorage.getItem("booking_id"));
      this.ticket.schedule_id=parseInt(sessionStorage.getItem("schedule_id"));
      // console.log(this.ticket.booking_id);
      console.log("forward");
      console.log(this.ticket.schedule_id);
      this.ticketService.addticketusingapi(this.ticket).subscribe(data=>{this.result=data
        sessionStorage.setItem("ticket_id",this.result.ticket_id)});
    }
    for(let index=0;index<this.returnseatnumbers.length;index++){
      this.returnticket = new Ticket();
      this.returnticket.travel_date=sessionStorage.getItem("return_date");
      this.returnticket.seat_no=this.returnseatnumbers[index];
      this.returnticket.passenger_id = this.passengersid[index];
      this.returnticket.booking_id = parseInt(sessionStorage.getItem("return_booking_id"));
      this.returnticket.schedule_id=parseInt(sessionStorage.getItem("return_schedule_id"));
      console.log("backward");
      console.log(this.returnticket.schedule_id);
      // console.log(this.ticket.booking_id);
      this.ticketService.addticketusingapi(this.returnticket).subscribe(data=>{this.returnresult=data
        sessionStorage.setItem("returnticket_id",this.returnresult.ticket_id)});
    }
  }
}
