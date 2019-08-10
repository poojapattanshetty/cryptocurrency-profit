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
import { Iquote } from '../../classes/IQuote';
import { ICurrencyProfitDetails } from '../../classes/CurrencyProfit/ICurrencyProfitDetails';

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
            {this.getProfitDetails()}
          </Grid>
        </Container>
      </>
    );
  }

  getProfitDetails = () => {
    return this.state.cryptocurrencyPriceList.map(
      (cryptocurrencyDetails: ICryptocurrencyPriceList) => {
        const {
          currencyProfit,
          currencyProfitDetails
        } = this.calculateCurrencyProfit(cryptocurrencyDetails.quotes);
        return (
          <Grid item xs={4}>
            <CurrencyBestProfit
              currencyProfit={currencyProfit}
              currencyProfitDetails={currencyProfitDetails}
              currencyType={cryptocurrencyDetails.currencyType}
            />
          </Grid>
        );
      }
    );
  };

  calculateCurrencyProfit = (currencyQuotes: Iquote[]) => {
    let currencyProfit = currencyQuotes[1].price - currencyQuotes[0].price;
    let buyingQuote: Iquote = {
      time: currencyQuotes[0].time,
      price: currencyQuotes[0].price
    };
    let currencyProfitDetails: ICurrencyProfitDetails = {
      bestBuyingPrice: 0,
      bestSellingPrice: 0,
      buyingTime: '',
      sellingTime: ''
    };

    for (let i = 1; i < currencyQuotes.length; i++) {
      if (currencyQuotes[i].price - buyingQuote.price > currencyProfit) {
        currencyProfit = currencyQuotes[i].price - buyingQuote.price;
        currencyProfitDetails.bestSellingPrice = currencyQuotes[i].price;
        currencyProfitDetails.sellingTime = currencyQuotes[i].time;
        currencyProfitDetails.bestBuyingPrice = buyingQuote.price;
        currencyProfitDetails.buyingTime = buyingQuote.time;
      }
      if (currencyQuotes[i].price < buyingQuote.price) {
        buyingQuote.price = currencyQuotes[i].price;
      }
    }
    return { currencyProfit, currencyProfitDetails };
  };
}

export default CurrencyProfit;
