import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AddCustomerService } from '../../services/add-customer.service';
import { Customer } from '../Customer';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {

  customer:Customer = new Customer();
  constructor(private route:Router,
              private cusData:AddCustomerService,
              private dialogRef:MatDialog,
              private cookie: CookieService
              ) { }

  showChild:boolean = false;

  @Output()  HideConatactForm:EventEmitter<any> = new EventEmitter<any>();


  ngOnInit(): void {
   
  }
  displayStyle = "none";
  cancelButton(){
    console.log("Cancel cliked");
    this.dialogRef.closeAll();
  }

  SubmitClick(data:any)
  {
    console.log("Submit clicked");
    this.customer.customer_name = data.customer_name;
    this.customer.phone = data.phone;
    this.customer.email = data.email;
    this.customer.company = data.company;
    console.log(this.customer);
    this.HideConatactForm.emit(this.showChild);
    this.cusData.RegisterCustomer(this.customer).subscribe();  
    this.cookie.set("currentCustomerId",this.customer.email);
    this.cookie.set("isRegister","Yes");
    this.route.navigate(['/questions']);
  }


}
