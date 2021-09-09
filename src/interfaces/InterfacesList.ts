export interface CurrenciesResponse {
  data: Array<CryptoCurrency>;
  info: InfoResponse;
}

interface InfoResponse {
  coins_num: number;
  time: number;
}

export interface CryptoCurrency {
  csupply: string;
  id: string;
  market_cap_usd: string;
  msupply: string;
  name: string;
  nameid: string;
  percent_change_1h: string;
  percent_change_7h: string;
  percent_change_24h: string;
  price_btc: string;
  price_usd: string;
  rank: number;
  symbol: string;
  tsupply: string;
  volume24: number;
}
