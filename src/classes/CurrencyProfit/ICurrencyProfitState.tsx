import { ICryptocurrencyPriceList } from '../ICryptocurrencyPriceList';

export interface ICurrencyProfitState {
  cryptocurrencyPriceList: ICryptocurrencyPriceList[];
  hasServerErrorOccurred: boolean;
}
