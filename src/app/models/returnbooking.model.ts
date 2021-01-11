import { scheduled } from "rxjs";

export class ReturnBooking{

    username:string;
    cost:number;
    return_schedule_id:number;
    constructor(username:string=sessionStorage.getItem("username"),cost:number=parseInt(sessionStorage.getItem("returncost")),return_schedule_id:number=0){
        this.username=username;
        this.cost=cost;
        this.return_schedule_id=return_schedule_id;
    }
}