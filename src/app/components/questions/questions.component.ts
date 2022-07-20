import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchserviceService } from '../../services/fetchservice.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  Questions:any[] = [];
  SectionId : null | string = null;

  Answers:any[] = [];
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string = "";

  constructor(private route: ActivatedRoute, private data: FetchserviceService) {
    this.radioSelected = "AGREE";
    this.getSelectedItem();
   }

  ngOnInit(): void {
    this.SectionId = this.route.snapshot.paramMap.get('id');
    this.data.GetQuestionsBySectionId(this.SectionId).subscribe(question => {this.Questions = question; this.ngOnInit();});
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
