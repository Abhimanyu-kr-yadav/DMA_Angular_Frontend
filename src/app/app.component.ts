import { Component, OnInit } from '@angular/core';
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


  constructor(private route: ActivatedRoute, private data: FetchserviceService){}
 
  ngOnInit(): void {
    this.data.GetSections().subscribe(section => this.Sections=section);
  }

}
