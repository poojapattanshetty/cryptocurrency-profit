import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './CurrencyProfit.css';
import { ICurrencyProfitProps } from '../../classes/CurrencyProfit/ICurrencyProfitProps';
import { ICurrencyProfitState } from '../../classes/CurrencyProfit/ICurrencyProfitState';
import { ICryptocurrencyPriceList } from '../../classes/ICryptocurrencyPriceList';
// import { currencyPriceList } from '../../shared/constants';
import { getCryptocurrencyPriceList } from '../../http/CryptocurrencyPriceList';
import CurrencyBestProfit from '../../components/CurrencyBestProfit/CurrencyBestProfit';
import { Container, Grid } from '@material-ui/core';

class CurrencyProfit extends React.PureComponent<
  ICurrencyProfitProps,
  ICurrencyProfitState
> {
  public state = {
    cryptocurrencyPriceList: [] as ICryptocurrencyPriceList[]
  };

  componentDidMount() {
    this.fetchCurrencyPriceList();
  }

  private fetchCurrencyPriceList = async () => {
    // this.setState({ cryptocurrencyPriceList: currencyPriceList });
    try {
      const cryptocurrencyPriceList = await getCryptocurrencyPriceList();
      this.setState({ cryptocurrencyPriceList });
    } catch (error) {
      console.error(error);
    }
  };

  public render() {
    return (
      <>
        <AppBar>
          <Toolbar className="toolbar">
            <Typography variant="h6">cryptocurrency</Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Container className="container">
          <Grid container justify="center" spacing={8}>
            <Grid item xs={4}>
              <CurrencyBestProfit />
            </Grid>
            <Grid item xs={4}>
              <CurrencyBestProfit />
            </Grid>
            <Grid item xs={4}>
              <CurrencyBestProfit />
            </Grid>
          </Grid>
        </Container>
        {/* <h5>
          {this.state.cryptocurrencyPriceList.map((crypto, index) => (
            <li key={index}>{crypto.currencyType}</li>
          ))}
        </h5> */}
      </>
    );
  }
}

export default CurrencyProfit;
