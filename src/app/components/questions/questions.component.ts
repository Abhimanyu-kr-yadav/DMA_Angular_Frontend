import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FetchserviceService } from '../../services/fetchservice.service';
import { CookieService } from 'ngx-cookie-service';
import { Customer } from '../Customer';
import { Response } from '../Response';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [{
    provide : MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'warn'}
  }]
})
export class QuestionsComponent implements OnInit {

  Questions:any[] = [];
  SectionId : null | string = null;

  Answers:any[] = [];
  
  answerName:any;

  //for saving response
  section_id:number = 0;
  customer_id:number = 0;
  email:string = '';

   customer: Customer = new Customer();

  response: Response = new Response();

  //try
  Sections:any[] = [];
  Section:any;
  
  Responses:string[] = [];
  tempData:any[] = [];
  constructor(private route: ActivatedRoute,
              private data: FetchserviceService,
              private cookie: CookieService) {
   }

  ngOnInit(): void {
    // this.SectionId = this.route.snapshot.paramMap.get('id');
    // this.data.GetQuestionsBySectionId(this.SectionId).subscribe(question => {this.Questions = question;});
    // this.data.GetAnswers().subscribe(answer => this.Answers = answer);
    this.data.GetSections().subscribe(section => this.Sections=section);
  }



  //try

  myForm = new FormGroup ({
  ans0 : new FormControl('',Validators.required),
  ans1 : new FormControl('',Validators.required),
  ans2 : new FormControl('',Validators.required),
  ans3 : new FormControl('',Validators.required),
  ans4 : new FormControl('',Validators.required),
  ans5 : new FormControl('',Validators.required),
})

//after clicking submit button
getFormData(data:any)
{
 
  if(data.ans0 != '')
  {
    this.Responses.push(data.ans0);
  }
  if(data.ans1 != '')
  {
    this.Responses.push(data.ans1);
  }
  if(data.ans2 != '')
  {
    this.Responses.push(data.ans2);
  }
  if(data.ans3 != '')
  {
    this.Responses.push(data.ans3);
  }
  if(data.ans4 != '')
  {
    this.Responses.push(data.ans4);
  }
  if(data.ans5 != '')
  {
    this.Responses.push(data.ans5);
  }
  this.myForm.reset();
  this.addToTemp(this.Responses);
  this.Responses = [];
}

//2nd method which called
addToTemp(data:any)
  {
    let temp = data;
    this.tempData.push(temp);
    this.print();
  }

questionLength:number = 0;

getQuestions(id:any)
  {
    this.section_id = id;
    this.data.GetQuestionsBySectionId(id).subscribe(question => {this.Questions = question;});
    this.data.GetAnswers().subscribe(answer => this.Answers = answer);
    setTimeout(() => {
      this.questionLength = this.Questions.length;
    }, 1000);

    this.email = this.cookie.get("currentCustomerId");
    this.data.GetCustomerByEmailId(this.email).subscribe({
      next: (data) => {
        this.customer.customer_id = data.customer_id;
        this.customer.customer_name = data.customer_name;
        this.customer.email = data.email;
        this.customer.phone = data.phone;
        this.customer.company = data.company;
        this.cookie.set("cid",JSON.stringify(data.customer_id));
      },
      error: (e) => console.error(e)
    });  
     
  }

  rid : any = 0;
  resArray:number[] = [];
  print()
  {
    for(var d of this.tempData)
    {
      for(var a of d)
      {
        //console.log(a);
        if(a === "AGREE" && a != null)
        {
          this.resArray.push(0);
        }
        if(a === "DISAGREE" && a != null)
        {
          this.resArray.push(1);
        }
        if(a === "STRONGLY_AGREE" && a != null)
        {
          this.resArray.push(2);
        }
        if(a === "STRONGLY_DISAGREE" && a != null)
        {
          this.resArray.push(3);
        }
        if(a === "Can_not_say" && a != null)
        {
          this.resArray.push(4);
        }
      }
    }
    this.rid = this.cookie.get("cid");
    this.sendres();
  }
  
  
  sendres()
  {
      if(this.section_id === 1)
      {
          for(let j = 1; j<=6; j++)
          {
            this.response.answer_id = this.resArray[j-1];
            this.response.customer_id = this.rid;
            this.response.question_id = j;
            this.response.section_id = this.section_id;
            this.data.SendResponse(this.response).subscribe();
          }
      }
      else if(this.section_id === 2)
      {
          for(let k = 7; k<=10; k++)
          {
            this.response.answer_id = this.resArray[k-1];
            this.response.customer_id = this.rid;
            this.response.question_id = k;
            this.response.section_id = this.section_id;
            this.data.SendResponse(this.response).subscribe();
          }
      }
      else if(this.section_id === 3)
      {
        for(let l = 11; l<=16; l++)
        {
            this.response.answer_id = this.resArray[l-1];
            this.response.customer_id = this.rid;
            this.response.question_id = l;
            this.response.section_id = this.section_id;
            this.data.SendResponse(this.response).subscribe();
        }
      }
      else if(this.section_id === 4)
      {
        for(let m = 17; m<=22; m++)
        {
            this.response.answer_id = this.resArray[m-1];
            this.response.customer_id = this.rid;
            this.response.question_id = m;
            this.response.section_id = this.section_id;
            this.data.SendResponse(this.response).subscribe();
        }
      }
      else if(this.section_id === 5)
      {
        for(let n = 23; n<=25; n++)
        {
            this.response.answer_id = this.resArray[n-1];
            this.response.customer_id = this.rid;
            this.response.question_id = n;
            this.response.section_id = this.section_id;
            this.data.SendResponse(this.response).subscribe();
        }
      }
    
  }
}
































  // getSelectedItem()
  // {
  //     this.radioSel = this.Answers.find(answer => answer.answer_name === this.radioSelected);
  //     this.radioSelectedString = JSON.stringify(this.radioSel);
  // }