import React, { useEffect, useState } from "react";
import * as CurrencieService from "../services/CurrencieService";
import { CryptoCurrency } from "../interfaces/InterfacesList";

const Coin = ({ match }) => {
  const [coin, setCoin] = useState<CryptoCurrency>([]);

  useEffect(() => {
    CurrencieService.getCurrency(match.params.id).then(
      ({ data }: { data: CryptoCurrency }) => {
        console.log(data);
        setCoin(data[0]);
      }
    );
  }, []);

  return (
    <React.Fragment>
      <h1>{coin.name}</h1>
      <p>Precio (USD:) {coin.price_usd}</p>
    </React.Fragment>
  );
};

export default Coin;
