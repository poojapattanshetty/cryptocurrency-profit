import { ICryptocurrencyPriceList } from '../ICryptocurrencyPriceList';
import { ICurrencyBestProfitProps } from '../CurrencyBestProfit/ICurrencyBestProfitProps';

export interface ICurrencyProfitState {
  cryptocurrencyPriceList: ICryptocurrencyPriceList[];
  currencyBestProfit: ICurrencyBestProfitProps;
}
