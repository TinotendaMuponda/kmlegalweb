import { Component } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stocks: Array<StockInterface> = [];

  constructor(private stockService: StocksService){
    this.stockService.load(['AAPL'])?.subscribe(stocks =>{
      this.stocks = stocks
    })
  }




}
