import { scheduled } from "rxjs";

export class Booking{

    username:string;
    cost:number;
    schedule_id:number;
    constructor(username:string=sessionStorage.getItem("username"),cost:number=parseInt(sessionStorage.getItem("cost")),schedule_id:number=parseInt(sessionStorage.getItem("schedule_id"))){
        this.username=username;
        this.cost=cost;
        this.schedule_id=schedule_id;
    }
}