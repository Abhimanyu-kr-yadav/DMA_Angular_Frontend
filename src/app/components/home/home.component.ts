import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchserviceService } from '../../services/fetchservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Sections:any[] = [];
  Section:any;
  Contents:string[]=[
    'a plan of action designed to achieve a long-term or overall aim',
    'Customer engagement is the process of interacting with customers through a variety of channels in order to strengthen your relationship',
    'A product is a tangible item that is put on the market for acquisition, attention, or consumption, while a service is an intangible item, which arises from the output of one or more individuals',
    'We help clients to reimagine their business, build workforces with the leaders and cultures to accelerate change, and create and deliver employee experience and HR services',
    'Digital operations is the concept of infusing business processes with the agility, intelligence and automation to create operational models that delight customers and improve performance'
  ];
  content0:string = 'a plan of action designed to achieve a long-term or overall aim';
  
  // Questions:any[] = [];
  // Answers:any[] = [];
  // Responses:strig[]=[];
  // tempData:string[] = [];


  constructor(private route: ActivatedRoute, private data: FetchserviceService){}
 
  ngOnInit(): void {
    this.data.GetSections().subscribe(section => this.Sections=section);
    
  }
}
