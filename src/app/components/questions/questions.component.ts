import { Component, OnInit } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
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

  constructor(private route: ActivatedRoute, private data: FetchserviceService) {
    this.radioSelected = "AGREE";
    this.getSelectedItem();
   }

  ngOnInit(): void {
    this.SectionId = this.route.snapshot.paramMap.get('id');
    this.data.GetQuestionsBySectionId(this.SectionId).subscribe(question => {this.Questions = question;});
    this.data.GetAnswers().subscribe(answer => this.Answers = answer);
  }

  getSelectedItem()
  {
    this.radioSel = this.Answers.find(answer => answer.answer_name === this.radioSelected);
      this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(anwer:any){
    this.getSelectedItem();
  }
}
