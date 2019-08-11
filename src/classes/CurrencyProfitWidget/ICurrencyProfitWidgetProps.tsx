import { ICurrencyProfitDetails } from '../CurrencyProfit/ICurrencyProfitDetails';

export interface ICurrencyProfitWidgetProps {
  currencyProfit: number;
  currencyProfitDetails: ICurrencyProfitDetails;
  currencyType: string;
  date: Date;
}
