import { Iquote } from '../IQuote';

export interface ICurrencyBestProfitProps {
  currencyQuotes: Iquote[];
  currencyType: string;
  date: string;
}
