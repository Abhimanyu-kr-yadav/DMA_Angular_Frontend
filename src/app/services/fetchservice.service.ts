import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../components/Customer';
import { Response } from '../components/Response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {


  constructor(private http: HttpClient,private cookie: CookieService) { }

  GetSections():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/dma/getSections');
  }

  GetQuestionsBySectionId(id:string|null):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/dma/getQuestionsBySectionId/${id}`);
  }

  GetAnswers():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/dma/getAnswers');
  }

  GetSectionBySectionId(id:string|null):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8080/dma/getSectionsById/${id}`);
  }
  GetCustomerByEmailId(email:any):Observable<Customer>{
    return this.http.get<Customer>(`http://localhost:8080/dma/getCustomerByEmail/${email}`);
  }

  cid:any = 0;
  SendResponse(response:Response):Observable<any>
  {
    const httpParams = new HttpParams({
      fromObject : {
        answer_id : response.answer_id,
        question_id: response.question_id,
        customer_id: response.customer_id,
        section_id: response.section_id
      }
    });
    return this.http.post<any>('http://localhost:8080/dma/addResponse',null,{params:httpParams});
  }
}
