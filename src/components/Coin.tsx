import React, { useEffect, useState } from "react";
import * as CurrencieService from "../services/CurrencieService";
import { CryptoCurrency } from "../interfaces/InterfacesList";

const Coin = ({ match }: { match: any }) => {
  const [coin, setCoin] = useState<CryptoCurrency>();
  useEffect(() => {
    CurrencieService.getCurrency(match.params.id).then(
      ({ data }: { data: Array<CryptoCurrency> }) => {
        setCoin(data[0]);
      }
    );
  }, []);

  return (
    <React.Fragment>
      <h1>{coin?.name}</h1>
      <p>Precio (USD:) {coin?.price_usd}</p>
    </React.Fragment>
  );
};

export default Coin;
