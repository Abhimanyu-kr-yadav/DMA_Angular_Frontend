import { Component, OnInit } from '@angular/core';
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
  Sections:any[] = [];
  Section:any;
  Questions:any[] = [];
  Answers:any[] = [];
  answers:string[] = ['AGREE','DISAGREE','STRONGLY_AGREE','STRONGLY_DISAGREE','Can_not_say'];
  question1:string = "Is your digital strategy defined?";
  question2:string = "Does your organization have a shared Vision of your digital strategy?";
  question3:string = "Is your organizational culture ready to accept digital transformation?";
  Responses:string[]=[];
  tempData:string[] = [];
  n:number = 0;

  constructor(private route: ActivatedRoute, private data: FetchserviceService){}
 
  ngOnInit(): void {
    this.data.GetSections().subscribe(section => this.Sections=section);
    
  }

  myForm = new FormGroup ({
    ans0 : new FormControl(''),
    ans1 : new FormControl(''),
    ans2 : new FormControl(''),
    ans3 : new FormControl(''),
    ans4 : new FormControl(''),
    ans5 : new FormControl('')
  })

  getQuestions(id:any)
  {
    this.data.GetQuestionsBySectionId(id).subscribe(question => {this.Questions = question;});
    this.data.GetAnswers().subscribe(answer => this.Answers = answer);
  }

  getQuestions2(id:any)
  {
    id = id + 1;
    console.log(id);
    this.data.GetQuestionsBySectionId(id).subscribe(question => {this.Questions = question;});
    this.data.GetAnswers().subscribe(answer => this.Answers = answer);
  }


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
    console.log(this.Responses);
    this.myForm.reset();
    this.tempData = this.Responses;
    localStorage.setItem("'res'+n",JSON.stringify(this.tempData));
    this.n = this.n+1;
    this.Responses = [];
  }

  openAnotherSection(sectionId:string)
  {
    console.log(sectionId);
    this.data.GetSectionBySectionId(sectionId).subscribe(section => {this.Section = section;});
  }
}
