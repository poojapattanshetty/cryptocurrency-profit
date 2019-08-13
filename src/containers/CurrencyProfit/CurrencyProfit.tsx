import React from 'react';

import './CurrencyProfit.css';
import { ICurrencyProfitState } from '../../classes/CurrencyProfit/ICurrencyProfitState';
import { ICryptocurrencyPriceList } from '../../classes/ICryptocurrencyPriceList';

import { Container, Grid } from '@material-ui/core';
import { getCryptocurrencyPriceList } from '../../http/CryptocurrencyPriceList';
import { CurrencyBestProfit } from '../../components/CurrencyBestProfit/CurrencyBestProfit';

class CurrencyProfit extends React.PureComponent<{}, ICurrencyProfitState> {
  public state = {
    cryptocurrencyPriceList: [] as ICryptocurrencyPriceList[],
    hasServerErrorOccurred: false
  };

  componentDidMount() {
    this.fetchCurrencyPriceList();
  }

  private fetchCurrencyPriceList = async () => {
    try {
      const cryptocurrencyPriceList = await getCryptocurrencyPriceList();
      this.setState({ cryptocurrencyPriceList });
    } catch (error) {
      this.setState({ hasServerErrorOccurred: true });
    }
  };

  public render() {
    if (this.state.hasServerErrorOccurred) {
      throw new Error('Something broke... Please try again!');
    }

    return (
      <Container className="container">
        <Grid container justify="center" spacing={6}>
          {this.state.cryptocurrencyPriceList.map((cryptocurrencyDetails: ICryptocurrencyPriceList, index) => {
            return (
              <CurrencyBestProfit
                key={index}
                currencyQuotes={cryptocurrencyDetails.quotes}
                currencyType={cryptocurrencyDetails.currencyType}
                date={cryptocurrencyDetails.date}
              />
            );
          })}
        </Grid>
      </Container>
    );
  }
}

export default CurrencyProfit;
