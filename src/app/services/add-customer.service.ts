import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerService {

  constructor(private http: HttpClient) { }

  RegisterCustomer(data:Object):Observable<Object>
  {
    return this.http.post<Object>('http://localhost:8080/dma/addCustomer',data);
  }

}
