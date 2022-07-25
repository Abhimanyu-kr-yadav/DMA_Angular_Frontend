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
  Questions:any[] = [];
  Answers:any[] = [];

  constructor(private route: ActivatedRoute, private data: FetchserviceService){}
 
  ngOnInit(): void {
    this.data.GetSections().subscribe(section => this.Sections=section);
    
  }

  myForm = new FormGroup ({
    ans : new FormControl('AGREE')
  })

  getQuestions(id:any)
  {
    this.data.GetQuestionsBySectionId(id).subscribe(question => {this.Questions = question;});
    this.data.GetAnswers().subscribe(answer => this.Answers = answer);
  }

  getFormData(data:any)
  {
    alert(JSON.stringify(data));
  }
}
