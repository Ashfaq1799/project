import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { DOCUMENT } from '@angular/common';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticketpdf',
  templateUrl: './ticketpdf.component.html',
  styleUrls: ['./ticketpdf.component.css']
})
export class TicketpdfComponent implements OnInit {
  passengersid:number[]=[];
  seatnumbers:string[]=[];
  ticket:Ticket;
  result:any;
  
  constructor(private ticketService:TicketService) {
    this.ticket= new Ticket();
   }

  download()
  {
    var element=document.getElementById('divid')!;
    html2canvas(element).then((canvas)=>{
      console.log(canvas)
      var imgData=canvas.toDataURL('image/png')
      var imgHeight=canvas.height*208/canvas.width;
      var doc=new jspdf()

      doc.addImage(imgData,0,0,208,imgHeight)
      doc.save("ticket.pdf")
    })
    
  }
  ngOnInit(): void {
    this.passengersid= JSON.parse(sessionStorage.getItem("passengers"));
    this.seatnumbers= JSON.parse(sessionStorage.getItem("seatnos"));
    for(let index=0;index<this.seatnumbers.length;index++){
      this.ticket = new Ticket();
      this.ticket.seat_no=this.seatnumbers[index];
      this.ticket.passenger_id = this.passengersid[index];
      console.log(parseInt(sessionStorage.getItem("booking_id")));
      this.ticket.booking_id = parseInt(sessionStorage.getItem("booking_id"));
      this.ticketService.addticketusingapi(this.ticket).subscribe(data=>{this.result=data
        sessionStorage.setItem("ticket_id",this.result.ticket_id)});
  }
  }
}
