export class Ticket{
    status:string;
    booking_id:number;
    seat_no:string;
    passenger_id:number;
    gate:number;
    travel_date:string;
    schedule_id:number;
    constructor(status:string="",booking_id:number=0,seat_no:string="",passenger_id:number=0,
    gate:number=0,travel_date:string="",schedule_id:number=0){
        this.status=status;
        this.booking_id=booking_id;
        this.seat_no=seat_no;
        this.passenger_id=passenger_id;
        this.gate=gate;
        this.travel_date=travel_date;
        this.schedule_id=schedule_id;
    }
}