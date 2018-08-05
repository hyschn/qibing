import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, ) { }

  getConfigJson(): Observable<any> {
    return this.http.get('assets/qibing.json');
  }

  getFileContext(filePath: string): Promise<string> {
    return this.http.get(filePath, { responseType: 'text' }).toPromise();
  }
}
