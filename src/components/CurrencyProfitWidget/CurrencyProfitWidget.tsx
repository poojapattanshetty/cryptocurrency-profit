import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import './CurrencyProfitWidget.css';
import { ICurrencyProfitWidgetProps } from '../../classes/CurrencyProfitWidget/ICurrencyProfitWidgetProps';
import {
  formatBuyingPrice,
  formatDate,
  formatSellingPrice,
  formatTime,
  formatCurrencyProfit
} from '../../shared/utils';

const CurrencyProfitWidget: React.FunctionComponent<ICurrencyProfitWidgetProps> = ({
  currencyProfit,
  currencyProfitDetails,
  currencyType,
  date
}: ICurrencyProfitWidgetProps) => {
  return (
    <Grid item xs={12} sm={8} md={4} lg={4} xl={4}>
      <Card className="text-center currency-profit-widget bg-light">
        <CardContent id="date" className="font-weight-bolder text-secondary">{formatDate(date)}</CardContent>
        <Divider />
        <div id="currency" className="font-weight-bolder">
          {currencyType}
        </div>
        <Divider />

        <CardContent>
          <Grid container justify="center">
            <Grid item xs={6} className="font-weight-bolder text-secondary">
              Buy
            </Grid>
            <Grid item xs={6} className="font-weight-bolder text-secondary">
              Sell
            </Grid>
            <Grid item xs={6} id="bestBuyingPrice" className="font-weight-bold py-2">
              {formatBuyingPrice(currencyProfitDetails.bestBuyingPrice)}
            </Grid>
            <Grid item xs={6} id="bestSellingPrice" className="font-weight-bold py-2">
              {formatSellingPrice(currencyProfitDetails.bestSellingPrice)}
            </Grid>
            <Grid item xs={6} id="buyingTime" className="text-secondary">
              {formatTime(currencyProfitDetails.buyingTime)}
            </Grid>
            <Grid item xs={6} id="sellingTime" className="text-secondary">
              {formatTime(currencyProfitDetails.sellingTime)}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <CardContent id="profit" className="text-success font-weight-bolder">
          Profit: {formatCurrencyProfit(currencyProfit)}
        </CardContent>
      </Card>
    </Grid>
  );
};

export { CurrencyProfitWidget };
