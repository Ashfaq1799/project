import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
isAuthenticated:boolean=false;
username:string;
admin:string;
isadminauthenticated=false;
  constructor(private router:Router) { }

  authenticate(username){
    this.username=username;
    sessionStorage.setItem("username",username);
    this.isAuthenticated = true;
    console.log(this.isAuthenticated);
    this.router.navigate(['Home']);
  }

  authenticateadmin(adminname){
    // this.admin=adminname;
    sessionStorage.setItem("admin",adminname);
    this.isadminauthenticated=true;
    this.router.navigateByUrl("/admin");
  }
  logout(){
    this.isAuthenticated=false;
    this.username=null;
    this.router.navigate(['Login']);
    sessionStorage.removeItem("username");
  }
  adminlogout(){
    this.isadminauthenticated=false;
    this.router.navigate(['adminlogin']);
  }
}
