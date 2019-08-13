import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import './CurrencyProfitWidget.css';
import { ICurrencyProfitWidgetProps } from '../../classes/CurrencyProfitWidget/ICurrencyProfitWidgetProps';
import { formatBuyingPrice, formatDate, formatSellingPrice, formatTime } from '../../shared/utils';

const CurrencyProfitWidget: React.FunctionComponent<ICurrencyProfitWidgetProps> = ({
  currencyProfit,
  currencyProfitDetails,
  currencyType,
  date
}: ICurrencyProfitWidgetProps) => {
  return (
    <Grid item xs={12} sm={8} md={4} lg={4} xl={4}>
      <Card className="text-center">
        <CardHeader title={formatDate(date)} />
        <Divider />
        <div id="currency" className="currency">
          {currencyType}
        </div>
        <Divider />

        <CardContent>
          <Grid container justify="center">
            <Grid item xs={6}>
              Buy
            </Grid>
            <Grid item xs={6}>
              Sell
            </Grid>
            <Grid item xs={6} id="bestBuyingPrice">
              {formatBuyingPrice(currencyProfitDetails.bestBuyingPrice)}
            </Grid>
            <Grid item xs={6} id="bestSellingPrice">
              {formatSellingPrice(currencyProfitDetails.bestSellingPrice)}
            </Grid>
            <Grid item xs={6} id="buyingTime">
              {formatTime(currencyProfitDetails.buyingTime)}
            </Grid>
            <Grid item xs={6} id="sellingTime">
              {formatTime(currencyProfitDetails.sellingTime)}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <CardContent>Profit: ${currencyProfit.toFixed(2)}</CardContent>
      </Card>
    </Grid>
  );
};

export { CurrencyProfitWidget };
