import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {

  constructor(private http: HttpClient) { }

  GetSections():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/dma/getSections');
  }

  GetQuestionsBySectionId(id:string|null):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/dma/getQuestionsBySectionId/${id}`);
  }

  GetAnswers():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/dma/getAnswers');
  }
}
