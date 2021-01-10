import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private AuthenticationService:AuthenticationService){

  }
  ngOnInit(): void {
  }

  logout(){
    this.AuthenticationService.logout();
  }
}
