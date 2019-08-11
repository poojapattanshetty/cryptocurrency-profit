import React from 'react';

import { shallow } from 'enzyme';

import { Cryptocurrency } from '../Cryptocurrency/Cryptocurrency';
import { Header } from '../Header/Header';
import CurrencyProfit from '../../containers/CurrencyProfit/CurrencyProfit';

describe('Cryptocurrency', () => {
  let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<Cryptocurrency />);
    });
  
  it('should render one <Header /> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

    it('should render one <CurrencyProfit /> component', () => {
      expect(wrapper.find(CurrencyProfit)).toHaveLength(1);
    });

});
