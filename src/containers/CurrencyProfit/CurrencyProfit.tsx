import React from 'react';

import './CurrencyProfit.css';
import { ICurrencyProfitProps } from '../../classes/CurrencyProfit/ICurrencyProfitProps';
import { ICurrencyProfitState } from '../../classes/CurrencyProfit/ICurrencyProfitState';
import { ICryptocurrencyPriceList } from '../../classes/ICryptocurrencyPriceList';

import CurrencyBestProfit from '../../components/CurrencyBestProfit/CurrencyBestProfit';
import { Container, Grid } from '@material-ui/core';
import { getCryptocurrencyPriceList } from '../../http/CryptocurrencyPriceList';
import { ICurrencyBestProfitProps } from '../../classes/CurrencyBestProfit/ICurrencyBestProfitProps';
import { CalculateProfit } from '../../shared/CalulateProfit';

class CurrencyProfit extends React.PureComponent<
  ICurrencyProfitProps,
  ICurrencyProfitState
> {
  public state = {
    cryptocurrencyPriceList: [] as ICryptocurrencyPriceList[],
    currencyBestProfit: {} as ICurrencyBestProfitProps
  };

  componentDidMount() {
    this.fetchCurrencyPriceList();
  }

  private fetchCurrencyPriceList = async () => {
    try {
      const cryptocurrencyPriceList = await getCryptocurrencyPriceList();
      this.setCryptocurrencyPriceList(cryptocurrencyPriceList);
    } catch (error) {
      console.error(error);
    }
  };

  private setCryptocurrencyPriceList = (
    cryptocurrencyPriceList: ICryptocurrencyPriceList[]
  ) => {
    this.setState({ cryptocurrencyPriceList });
  };

  public render() {
    return (
      <Container className="container">
        <Grid container justify="center" spacing={8}>
          {this.state.cryptocurrencyPriceList.map(
            (cryptocurrencyDetails: ICryptocurrencyPriceList) => {
              //calculate best profit for each currency
              const {
                currencyProfit,
                currencyProfitDetails
              } = CalculateProfit.calculateCurrencyProfit(
                cryptocurrencyDetails.quotes
              );

              //render custom component for each currency
              return (
                <CurrencyBestProfit
                  currencyProfit={currencyProfit}
                  currencyProfitDetails={currencyProfitDetails}
                  currencyType={cryptocurrencyDetails.currencyType}
                />
              );
            }
          )}
        </Grid>
      </Container>
    );
  }
}

export default CurrencyProfit;
