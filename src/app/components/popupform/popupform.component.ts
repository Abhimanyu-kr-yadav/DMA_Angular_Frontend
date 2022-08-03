import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegistercustomerComponent } from '../registercustomer/registercustomer.component';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})
export class PopupformComponent implements OnInit {

  constructor(private route:Router,private dialogRef:MatDialog) { }
  showChild:boolean = true;

  @Output()  ChildComponentClick:EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
  }
  //displayStyle = "none";

  openPopup() {
    //this.displayStyle = "block";
    // this.route.navigate(['/addCustomer']);
    //this.dialogRef.open(RegistercustomerComponent);

    this.ChildComponentClick.emit(this.showChild);
  }


}

