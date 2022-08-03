import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FetchserviceService } from './services/fetchservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'dma';


  thenBlock:TemplateRef<any>|null = null;

  @ViewChild('then1', {static: true}) then1:TemplateRef<any>|null = null;
  @ViewChild('then2', {static: true}) then2:TemplateRef<any>|null = null;
  @ViewChild('then3', {static: true}) then3:TemplateRef<any>|null = null;


  show = true;
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
  

  constructor(private route: ActivatedRoute, private data: FetchserviceService){}
 
  ngOnInit(): void {
    this.data.GetSections().subscribe(section => this.Sections=section);
    this.thenBlock = this.then1;
  }
  GetMessageFromChild(e:any){
    //this will use to show register customer form
    this.thenBlock = this.then3;
   }

   GetMessageToHide(e:any)
   {
    //this will use to hide register customer form
    this.thenBlock = this.then2;
    this.show = e;
   }

}






















// myForm = new FormGroup ({
//   ans0 : new FormControl(''),
//   ans1 : new FormControl(''),
//   ans2 : new FormControl(''),
//   ans3 : new FormControl(''),
//   ans4 : new FormControl(''),
//   ans5 : new FormControl('')
// })


// getFormData(data:any)
// {
 
//   if(data.ans0 != '')
//   {
//     this.Responses.push(data.ans0);
//   }
//   if(data.ans1 != '')
//   {
//     this.Responses.push(data.ans1);
//   }
//   if(data.ans2 != '')
//   {
//     this.Responses.push(data.ans2);
//   }
//   if(data.ans3 != '')
//   {
//     this.Responses.push(data.ans3);
//   }
//   if(data.ans4 != '')
//   {
//     this.Responses.push(data.ans4);
//   }
//   if(data.ans5 != '')
//   {
//     this.Responses.push(data.ans5);
//   }
//   console.log(this.Responses);
//   this.myForm.reset();
//   this.tempData = this.Responses;
//   localStorage.setItem("res1",JSON.stringify(this.tempData));
//   this.Responses = [];
// }



// getQuestions(id:any)
//   {
//     this.data.GetQuestionsBySectionId(id).subscribe(question => {this.Questions = question;});
//     this.data.GetAnswers().subscribe(answer => this.Answers = answer);
//   }

 
//   openAnotherSection(sectionId:string)
//   {
//     console.log(sectionId);
//     this.data.GetSectionBySectionId(sectionId).subscribe(section => {this.Section = section;});
//   }