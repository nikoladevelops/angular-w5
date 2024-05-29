import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CryptoDataModel } from './CryptoDataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private allCryptoApiUrl = 'https://api.coincap.io/v2/assets/';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns Every single crypto's data
   */
  getAllCryptoData(): Observable<CryptoDataModel[]> {
    return this.http.get<any>(this.allCryptoApiUrl).pipe(
      map(response => {
        let arrayOfJson = response.data;

        return arrayOfJson.map((item: any) => {
          return {
            id: item.id,
            rank: item.rank,
            symbol: item.symbol,
            name: item.name,
            supply: parseFloat(parseFloat(item.supply).toFixed(0)),
            maxSupply: parseFloat(parseFloat(item.maxSupply).toFixed(0)),
            marketCapUsd: parseFloat(parseFloat(item.marketCapUsd).toFixed(3)),
            volumeUsd24Hr: parseFloat(parseFloat(item.volumeUsd24Hr).toFixed(2)),
            priceUsd: parseFloat(parseFloat(item.priceUsd).toFixed(2)),
            changePercent24Hr: parseFloat(parseFloat(item.changePercent24Hr).toFixed(3)),
            vwap24Hr: parseFloat(parseFloat(item.vwap24Hr).toFixed(3))
          } as CryptoDataModel;
        }) as CryptoDataModel[];
      })
    );
  }

}
