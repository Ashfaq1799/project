import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.checkoutForm= new FormGroup({
      name:new FormControl('',Validators.required),
      card_number:new FormControl('',[Validators.required,Validators.pattern('[0-9-]*')]),
      expiry_month:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(2)]),
      expiry_year:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4)]),
      cvv:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
    });
  }
  get name(){return this.checkoutForm.get('name')}
  get card_number(){return this.checkoutForm.get('card_number')}
  get expiry_month(){return this.checkoutForm.get('expiry_month')}
  get expiry_year(){return this.checkoutForm.get('expiry_year')}
  get cvv(){return this.checkoutForm.get('cvv')}

  onsubmit(){
    console.log(this.checkoutForm.value);
  }
}
