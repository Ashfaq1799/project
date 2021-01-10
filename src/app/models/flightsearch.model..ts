export class Flight
{

    source_destination:string;
    target_destination:string;
    travel_date:string;
    travellers:number;
    flight_class:string;

    constructor(source_destination:string="",target_destination:string="",travel_date:string="",travellers:number=0,flight_class:string="")
       {
        this.source_destination=source_destination;
        this.target_destination=target_destination;
        this.travel_date=travel_date;
        this.travellers=travellers;
        this.flight_class=flight_class;
    }
}
