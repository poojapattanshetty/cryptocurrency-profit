import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import './CurrencyBestProfit.css';

const currencyBestProfit = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Card className="text-center">
          <CardHeader title="07-May-18" />
          <Divider />
          <div>BTC</div>
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
                $34.98
              </Grid>
              <Grid item xs={6}>
                $34.07
              </Grid>
              <Grid item xs={6}>
                (09:15AM)
              </Grid>
              <Grid item xs={6}>
                (12:30PM)
              </Grid>
            </Grid>
          </CardContent>
          <Divider />

          <CardContent>Profit: $2.03</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default currencyBestProfit;
