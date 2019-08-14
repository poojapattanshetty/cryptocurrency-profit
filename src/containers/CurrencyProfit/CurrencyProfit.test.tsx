import React from 'react';

import { shallow } from 'enzyme';
import CurrencyProfit from './CurrencyProfit';
import { Container, Grid } from '@material-ui/core';
import { CurrencyBestProfit } from '../../components/CurrencyBestProfit/CurrencyBestProfit';
import { getCryptocurrencyPriceList } from '../../http/CryptocurrencyPriceList';

describe('CurrencyProfit', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<CurrencyProfit />);
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

  it('should render one <CurrencyBestProfit /> component for every currency object in cryptocurrenyPriceList', async () => {
    await wrapper.instance().fetchCurrencyPriceList();
    expect(wrapper.find(CurrencyBestProfit)).toHaveLength(3);
  });

  it('should call fetchCurrencyPriceList() to set cryptocurrencyPriceList to apiResponse', async () => {
    const response = await getCryptocurrencyPriceList();
    await wrapper.instance().fetchCurrencyPriceList();
    expect(wrapper.state().cryptocurrencyPriceList).toEqual(response);
  });
});
