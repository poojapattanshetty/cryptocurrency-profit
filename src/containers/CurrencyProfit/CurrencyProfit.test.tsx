import React from 'react';

import { shallow } from 'enzyme';
import { ICryptocurrencyPriceList } from '../../classes/ICryptocurrencyPriceList';
import CurrencyProfit from './CurrencyProfit';
import { Container, Grid } from '@material-ui/core';
import { CurrencyBestProfit } from '../../components/CurrencyBestProfit/CurrencyBestProfit';

describe('CurrencyProfit', () => {
  let wrapper: any;

  const state = {
    cryptocurrencyPriceList: [
      {
        currency: 'BTC',
        date: '20180507',
        quotes: [
          { time: '0915', price: '34.98' },
          { time: '1045', price: '36.13' },
          { time: '1230', price: '37.01' },
          { time: '1400', price: '35.98' },
          { time: '1530', price: '33.56' }
        ]
      }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<CurrencyProfit />);
     wrapper.setState({
       cryptocurrencyPriceList: state.cryptocurrencyPriceList
     });
  });

  it('should render one <Container />', () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('should render one <Grid /> element with following properties ', () => {
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Grid).props().container).toEqual(true);
    expect(wrapper.find(Grid).props().justify).toEqual('center');
    expect(wrapper.find(Grid).props().spacing).toEqual(6);
  });

  it('should render one <CurrencyBestProfit /> component for every currency object in cryptocurrenyPriceList', () => {
    expect(wrapper.find(CurrencyBestProfit)).toHaveLength(1);
  });
});
