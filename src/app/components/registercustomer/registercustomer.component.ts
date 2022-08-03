import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AddCustomerService } from '../../services/add-customer.service';
import { Customer } from '../Customer';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {

  customer:Customer = new Customer();
  constructor(private route:Router,private cusData:AddCustomerService,private dialogRef:MatDialog) { }

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
    this.route.navigate(['/questions']);
  }
}
