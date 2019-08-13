import React from 'react';

import { Header } from '../Header/Header';
import CurrencyProfit from '../../containers/CurrencyProfit/CurrencyProfit';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

const Cryptocurrency: React.FunctionComponent = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <CurrencyProfit />
      </ErrorBoundary>
    </>
  );
};

export { Cryptocurrency };
