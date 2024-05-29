import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.coincap.io/v2/assets/bitcoin';

  constructor(private http: HttpClient) { }

  logTest(): void {
    console.log("test");
  }

  getBitcoinData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
