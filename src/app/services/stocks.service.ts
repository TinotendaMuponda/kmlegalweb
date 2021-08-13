import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }
    load(symbols:any) {
      if (symbols) {
        return this.http.get(service + '/stocks/snapshot?symbols=' + symbols.join());
      }
    }
}
