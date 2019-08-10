import { Iquote } from '../classes/IQuote';
import { ICurrencyProfitDetails } from '../classes/CurrencyProfit/ICurrencyProfitDetails';

export class CalculateProfit {
  static calculateCurrencyProfit = (currencyQuotes: Iquote[]) => {
    let currencyProfit = currencyQuotes[1].price - currencyQuotes[0].price;
    let buyingQuote: Iquote = {
      time: currencyQuotes[0].time,
      price: currencyQuotes[0].price
    };
    let currencyProfitDetails: ICurrencyProfitDetails = {
      bestBuyingPrice: 0,
      bestSellingPrice: 0,
      buyingTime: '',
      sellingTime: ''
    };

    for (let i = 1; i < currencyQuotes.length; i++) {
      if (currencyQuotes[i].price - buyingQuote.price > currencyProfit) {
        currencyProfit = currencyQuotes[i].price - buyingQuote.price;
        currencyProfitDetails.bestSellingPrice = currencyQuotes[i].price;
        currencyProfitDetails.sellingTime = currencyQuotes[i].time;
        currencyProfitDetails.bestBuyingPrice = buyingQuote.price;
        currencyProfitDetails.buyingTime = buyingQuote.time;
      }
      if (currencyQuotes[i].price < buyingQuote.price) {
        buyingQuote.price = currencyQuotes[i].price;
      }
    }
    return { currencyProfit, currencyProfitDetails };
  }
}
