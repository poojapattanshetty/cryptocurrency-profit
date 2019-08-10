import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import './CurrencyBestProfit.css';
import { ICurrencyBestProfitProps } from '../../classes/CurrencyBestProfit/ICurrencyBestProfitProps';

const currencyBestProfit = ({
  currencyProfit,
  currencyProfitDetails,
  currencyType
}: ICurrencyBestProfitProps) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Card className="text-center">
          <CardHeader title="07-May-18" />
          <Divider />
          <div>{currencyType}</div>
          <Divider />

          <CardContent>
            <Grid container justify="center">
              <Grid item xs={6}>
                Buy
              </Grid>
              <Grid item xs={6}>
                Sell
              </Grid>
              <Grid item xs={6}>
                ${currencyProfitDetails.bestBuyingPrice}
              </Grid>
              <Grid item xs={6}>
                ${currencyProfitDetails.bestSellingPrice}
              </Grid>
              <Grid item xs={6}>
                {currencyProfitDetails.buyingTime}
              </Grid>
              <Grid item xs={6}>
                {currencyProfitDetails.sellingTime}
              </Grid>
            </Grid>
          </CardContent>
          <Divider />

          <CardContent>Profit: ${currencyProfit.toFixed(2)}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default currencyBestProfit;
