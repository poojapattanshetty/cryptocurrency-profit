import moment from 'moment';

export const formatDate = (date: Date) => {
  return date ? moment(date).format('DD-MMM-YY') : '';
};

export const formatTime = (time: Date) => {
  return time ? moment(time, "HHmm").format('hh:mm A') : '';
};

export const formatBuyingPrice = (buyingPrice: Number) => {
  return buyingPrice ? '$' + buyingPrice  : '';
};

export const formatSellingPrice = (sellingPrice: Number) => {
  return sellingPrice ? '$' + sellingPrice : '';
};

export const formatCurrencyProfit = (currencyProfit: Number) => {
  return currencyProfit ? '$' + currencyProfit.toFixed(2) : '';
};
 