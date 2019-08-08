import React from 'react';
import { ICurrencyProfitProps } from '../../classes/CurrencyProfit/ICurrencyProfitProps';
import { ICurrencyProfitState } from '../../classes/CurrencyProfit/ICurrencyProfitState';
import { ICryptocurrencyPriceList } from '../../classes/ICryptocurrencyPriceList';
// import { currencyPriceList } from '../../shared/constants';
import { getCryptocurrencyPriceList } from '../../http/CryptocurrencyPriceList';

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
        <h5>
          {this.state.cryptocurrencyPriceList.map((crypto, index) => (
            <li key={index}>{crypto.currencyType}</li>
          ))}
        </h5>
      </>
    );
  }
}

export default CurrencyProfit;
