import React from 'react';

import { shallow } from 'enzyme';

import { CurrencyBestProfit, calculateCurrencyProfit } from './CurrencyBestProfit';
import { ICurrencyBestProfitProps } from '../../classes/CurrencyBestProfit/ICurrencyBestProfitProps';
import { ICurrencyProfitDetails } from '../../classes/CurrencyProfit/ICurrencyProfitDetails';
import { CurrencyProfitWidget } from '../CurrencyProfitWidget/CurrencyProfitWidget';

describe('CurrencyBestProfit', () => {
  let wrapper: any;

  const mockProps: ICurrencyBestProfitProps = {
    currencyQuotes: [
      { time: new Date('0915'), price: 34.98 },
      { time: new Date('1045'), price: 36.13 },
      { time: new Date('1230'), price: 37.01 },
      { time: new Date('1400'), price: 35.98 },
      { time: new Date('1530'), price: 33.56 }
    ],
    currencyType: 'BTC',
    date: new Date('20180507')
  };

  beforeEach(() => {
    wrapper = shallow(<CurrencyBestProfit {...mockProps} />);
  });

  it('should render 1 <CurrencyProfitWidget /> component', () => {
    expect(wrapper.find(CurrencyProfitWidget)).toHaveLength(1);
  });

  it('should call the calculateCurrencyProfit function to calculate the best profit details for currency', () => {
    const currencyProfit = 2.030000000000001;
    const currencyProfitDetails: ICurrencyProfitDetails = {
      bestBuyingPrice: 34.98,
      bestSellingPrice: 37.01,
      buyingTime: new Date('0915'),
      sellingTime: new Date('1230')
    };
    expect(calculateCurrencyProfit(mockProps.currencyQuotes)).toEqual({ currencyProfit, currencyProfitDetails });
  });
});
