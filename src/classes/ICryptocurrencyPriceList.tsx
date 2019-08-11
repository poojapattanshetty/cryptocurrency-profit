import { CurrencyType } from '../shared/types';
import { Iquote } from './IQuote';

export interface ICryptocurrencyPriceList {
  currencyType: CurrencyType;
  date: Date;
  quotes: Iquote[];
}
