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

  constructor(private route: ActivatedRoute, private data: FetchserviceService) { }

  ngOnInit(): void {
    this.SectionId = this.route.snapshot.paramMap.get('id');
    this.data.GetQuestionsBySectionId(this.SectionId).subscribe(question => this.Questions = question);
  }

}
