import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FetchserviceService } from '../../services/fetchservice.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [{
    provide : MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent'}
  }]
})
export class QuestionsComponent implements OnInit {

  Questions:any[] = [];
  SectionId : null | string = null;

  Answers:any[] = [];
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string = "";
  answerName:any;



  //try
  Sections:any[] = [];
  Section:any;
  Responses:string[] = [];
  tempData:string[] = [];

  constructor(private route: ActivatedRoute, private data: FetchserviceService) {
    this.radioSelected = "AGREE";
    this.getSelectedItem();
   }

  ngOnInit(): void {
    // this.SectionId = this.route.snapshot.paramMap.get('id');
    // this.data.GetQuestionsBySectionId(this.SectionId).subscribe(question => {this.Questions = question;});
    // this.data.GetAnswers().subscribe(answer => this.Answers = answer);
    this.data.GetSections().subscribe(section => this.Sections=section);
  }

  getSelectedItem()
  {
      this.radioSel = this.Answers.find(answer => answer.answer_name === this.radioSelected);
      this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(anwer:any){
    this.getSelectedItem();
  }



  //try

  myForm = new FormGroup ({
  ans0 : new FormControl(''),
  ans1 : new FormControl(''),
  ans2 : new FormControl(''),
  ans3 : new FormControl(''),
  ans4 : new FormControl(''),
  ans5 : new FormControl('')
})


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
  localStorage.setItem("res1",JSON.stringify(this.tempData));
  this.Responses = [];
}



getQuestions(id:any)
  {
    this.data.GetQuestionsBySectionId(id).subscribe(question => {this.Questions = question;});
    this.data.GetAnswers().subscribe(answer => this.Answers = answer);
  }

}
