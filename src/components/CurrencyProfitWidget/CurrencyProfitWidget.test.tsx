import React from 'react';

import { shallow } from 'enzyme';
import { ICurrencyProfitWidgetProps } from '../../classes/CurrencyProfitWidget/ICurrencyProfitWidgetProps';
import { CurrencyProfitWidget } from './CurrencyProfitWidget';
import { CardHeader } from '@material-ui/core';
import { formatBuyingPrice, formatDate, formatSellingPrice, formatTime } from '../../shared/utils';

describe('CurrencyProfitWidget', () => {
    let wrapper: any;

    const mockProps: ICurrencyProfitWidgetProps = {
        currencyProfit: 2.03,
        currencyProfitDetails: {
            bestBuyingPrice: 34.98,
            bestSellingPrice: 37.01,
            buyingTime: new Date('0915'),
            sellingTime: new Date('1230')
        },
        currencyType: 'BTC',
        date: new Date('20180507')

    };

    beforeEach(() => {
      wrapper = shallow(<CurrencyProfitWidget {...mockProps} />);
    });

    it('should receive correct prop values', () => {
       expect(wrapper.find(CardHeader).props().title).toEqual(formatDate(mockProps.date));
       expect(wrapper.find('#currency').text()).toEqual('BTC');
       expect(wrapper.find('#bestBuyingPrice').text()).toEqual(formatBuyingPrice(mockProps.currencyProfitDetails.bestBuyingPrice));
       expect(wrapper.find('#bestSellingPrice').text()).toEqual(formatSellingPrice(mockProps.currencyProfitDetails.bestSellingPrice));
       expect(wrapper.find('#buyingTime').text()).toEqual(formatTime(mockProps.currencyProfitDetails.buyingTime));
       expect(wrapper.find('#sellingTime').text()).toEqual(formatTime(mockProps.currencyProfitDetails.sellingTime));
    });

});