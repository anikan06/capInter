import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(
    private http: HttpClient,
  ) { }


  getuser(): Observable<any> {
    return this.http.get('https://gorest.co.in/public/v2/users');
  }
}
