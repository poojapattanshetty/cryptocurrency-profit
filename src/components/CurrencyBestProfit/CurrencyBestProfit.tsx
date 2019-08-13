import React from 'react';

import { Iquote } from '../../classes/IQuote';
import { ICurrencyProfitDetails } from '../../classes/CurrencyProfit/ICurrencyProfitDetails';
import { CurrencyProfitWidget } from '../CurrencyProfitWidget/CurrencyProfitWidget';
import { ICurrencyBestProfitProps } from '../../classes/CurrencyBestProfit/ICurrencyBestProfitProps';

export const calculateCurrencyProfit = (currencyQuotes: Iquote[]) => {
  try {
    let currencyProfit = currencyQuotes[1].price - currencyQuotes[0].price;
    let buyingQuote: Iquote = {
      time: currencyQuotes[0].time,
      price: currencyQuotes[0].price
    };
    let currencyProfitDetails: ICurrencyProfitDetails = {
      bestBuyingPrice: 0,
      bestSellingPrice: 0,
      buyingTime: new Date(),
      sellingTime: new Date()
    };

    for (let i = 1; i < currencyQuotes.length; i++) {
      // Find the currency details that has the maximum profit
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
  } catch (error) {
    throw new Error();
  }
};

const CurrencyBestProfit: React.FunctionComponent<ICurrencyBestProfitProps> = ({
  currencyQuotes,
  currencyType,
  date
}) => {
  //calculate best profit for each currency
  const { currencyProfit, currencyProfitDetails } = calculateCurrencyProfit(currencyQuotes);

  //render custom component for each currency
  return (
    <CurrencyProfitWidget
      currencyProfit={currencyProfit}
      currencyProfitDetails={currencyProfitDetails}
      currencyType={currencyType}
      date={date}
    />
  );
};

export { CurrencyBestProfit };
