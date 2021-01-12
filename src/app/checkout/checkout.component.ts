import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from '../models/booking.model';
import { passenger } from '../models/passenger.model';
import { ReturnBooking } from '../models/returnbooking.model';
import { Ticket } from '../models/ticket.model';
import { BookingService } from '../services/booking.service';
import { PassengerService } from '../services/passenger.service';
import { ReturnflightsService } from '../services/returnflights.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm:FormGroup;
  booking:Booking;
  returnbooking:ReturnBooking;
  seat_nos= sessionStorage.getItem("seatnos");
  username=sessionStorage.getItem("username");
  travel_date=sessionStorage.getItem("travel_date");
  count:number=parseInt(sessionStorage.getItem("count"));
  upcost:number=parseInt(sessionStorage.getItem("cost"));
  schedule_id=parseInt(sessionStorage.getItem("schedule_id"));
  downcost:number=parseInt(sessionStorage.getItem("returncost"));
  return_schedule_id=parseInt(sessionStorage.getItem("return_schedule_id"));
  return_seat_nos= sessionStorage.getItem("returnseatnos");
  return_date=sessionStorage.getItem("return_date");
  result:any;
  dummy:any;
  returnresult:any;
  ticket:Ticket;
  passengersid:number[]=[];
  seatnumbers:string[]=[];
  
  // passengerdetails:passenger[];
  // passenger:any;
  constructor(private passengerService:PassengerService,private router:Router,private bookingService:BookingService,private ticketService:TicketService,
    private returnflightservice:ReturnflightsService) {
    this.booking=new Booking();
    this.returnbooking= new ReturnBooking();
    this.ticket=new Ticket();
   }

  ngOnInit(): void {
    this.checkoutForm= new FormGroup({
      name:new FormControl('',Validators.required),
      card_number:new FormControl('',[Validators.required,Validators.pattern('[0-9-]*')]),
      expiry_month:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(2)]),
      expiry_year:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4)]),
      cvv:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
    });
    // this.booking = new Booking(this.username,this.totalcost,this.schedule_id);
    // this.passengersid= JSON.parse(sessionStorage.getItem("passengers"));
    // for(let index=0;index<this.passengersid.length;index++){
    //   this.passengerService.getpassengerdetailsusingapi(this.passengersid[index]).subscribe(data=>{this.passenger=data}
    //     this.pushdata(this.passenger))
    // }

  }
  // pushdata(passenger:any){

  // }
  get name(){return this.checkoutForm.get('name')}
  get card_number(){return this.checkoutForm.get('card_number')}
  get expiry_month(){return this.checkoutForm.get('expiry_month')}
  get expiry_year(){return this.checkoutForm.get('expiry_year')}
  get cvv(){return this.checkoutForm.get('cvv')}
 
  
  onsubmit(){
    // this.dummy = parseInt(sessionStorage.getItem("return_schedule_id"));
    this.booking.schedule_id=parseInt(sessionStorage.getItem("schedule_id"));
    this.bookingService.addbookingusingapi(this.booking).subscribe(data=>{this.result=data 
      sessionStorage.setItem("booking_id",this.result.booking_id)});

    // this.returnbooking.return_schedule_id = parseInt(sessionStorage.getItem("return_schedule_id"));
    // this.returnflightservice.addreturnbookingusingapi(this.returnbooking).subscribe(data=>{this.returnresult=data
    //   sessionStorage.setItem("return_booking_id",this.returnresult.booking_id)});
      // alert("congrats your payment has been recived , Enjoy your journey");
    // this.generateticket();
    // this.generate();
  }
  
  generateticket(){
    if(sessionStorage.getItem("bookreturn")=="false"){
      this.returnbooking.schedule_id = parseInt(sessionStorage.getItem("return_schedule_id"));
      console.log(this.returnbooking);
      this.returnflightservice.addreturnbookingusingapi(this.returnbooking).subscribe(data=>{this.returnresult=data
        sessionStorage.setItem("return_booking_id",this.returnresult.booking_id)});
    }
    // this.router.navigateByUrl("pdfgeneration");
  }
  // generateticket(){
  //     this.router.navigate(['ticketgeneration'])
  // }
  // generate(){
  //   this.passengersid= JSON.parse(sessionStorage.getItem("passengers"));
  //   this.seatnumbers= JSON.parse(sessionStorage.getItem("seatnos"));
  //   for(let index=0;index<this.seatnumbers.length;index++){
  //     this.ticket = new Ticket();
  //     this.ticket.seat_no=this.seatnumbers[index];
  //     this.ticket.passenger_id = this.passengersid[index];
  //     console.log(parseInt(sessionStorage.getItem("booking_id")));
  //     this.ticket.booking_id = parseInt(sessionStorage.getItem("booking_id"));
  //     this.ticketService.addticketusingapi(this.ticket).subscribe(data=>{this.result=data
  //       sessionStorage.setItem("ticket_id",this.result.ticket_id)});
  //   }
  }

