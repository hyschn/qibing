import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, ) { }

  getConfigJson(): Observable<any>  {
    return this.http.get('assets/qibing.json');
  }
}
