import { ICurrencyProfitDetails } from '../CurrencyProfit/ICurrencyProfitDetails';

export interface ICurrencyBestProfitProps {
  currencyProfit: number;
  currencyProfitDetails: ICurrencyProfitDetails;
  currencyType: string;
}
