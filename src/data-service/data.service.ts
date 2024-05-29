import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CryptoDataModel } from './CryptoDataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.coincap.io/v2/assets/bitcoin';

  constructor(private http: HttpClient) { }

  logTest(): void {
    console.log("test");
  }

  getBitcoinData(): Observable<CryptoDataModel> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(response => {
          const formattedData = {
            ...response.data,
            priceUsd: parseFloat(response.data.priceUsd).toFixed(2),
            marketCapUsd: parseFloat(response.data.marketCapUsd).toFixed(2),
            volumeUsd24Hr: parseFloat(response.data.volumeUsd24Hr).toFixed(2),
            changePercent24Hr: parseFloat(response.data.changePercent24Hr).toFixed(5)
          };

          return formattedData as CryptoDataModel
        }
        ),
      );
  }
}
