import axios from 'axios';
import { apiBaseUrl } from '../axiosBaseConfig';

export const getCryptocurrencyPriceList = () => {
  return axios
    .get(apiBaseUrl + '/v1/cryptocurrency-pricelist')
    .then(value => value.data);
};
