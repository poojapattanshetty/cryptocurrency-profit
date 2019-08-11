import React from 'react';

import { shallow } from 'enzyme';
import { CurrencyBestProfit } from './CurrencyBestProfit';
import { ICurrencyBestProfitProps } from '../../classes/CurrencyBestProfit/ICurrencyBestProfitProps';

describe('CurrencyBestProfit', () => {
  let wrapper: any;

  const mockProps: ICurrencyBestProfitProps = {
    currencyQuotes: [
      { time: new Date(0915), price: 34.98 },
      { time: new Date(1045), price: 36.13 },
      { time: new Date(1230), price: 37.01 },
      { time: new Date(1400), price: 35.98 },
      { time: new Date(1530), price: 33.56 }
    ],
    currencyType: 'BTC',
    date: new Date(20180507)
  };

  beforeEach(() => {
    wrapper = shallow(<CurrencyBestProfit {...mockProps} />);
  });

});
