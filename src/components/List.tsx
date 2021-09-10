import React, { useEffect, useState } from "react";
import * as CurrenciesService from "../services/CurrenciesService";
import { Link } from "react-router-dom";
import { CryptoCurrency } from "./../interfaces/InterfacesList";
const List = () => {
  const [coinList, setCoinList] = useState<Array<CryptoCurrency>>();

  useEffect(() => {
    CurrenciesService.fetchCryptoList().then(
      ({ data }: { data: { data: Array<CryptoCurrency> } }) => {
        setCoinList(data.data);
      }
    );
  }, []);

  return (
    <React.Fragment>
      <ul>
        {coinList?.map((dataCoin: CryptoCurrency) => (
          <li key={dataCoin.id}>
            <h1>
              <Link to={`/list/${dataCoin.id}`}>
                {dataCoin.name} - {dataCoin.symbol}
              </Link>
            </h1>
            <p>{dataCoin.price_usd}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
