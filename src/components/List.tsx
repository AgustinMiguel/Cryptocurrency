import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {CurrenciesResponse, CryptoCurrency} from "./../interfaces/InterfacesList"
const List = () => {
  const [coinList, setCoinList] = useState<Array<CryptoCurrency>>();
  
  const url = "https://api.coinlore.net/api/tickers/"

  useEffect(() => {
    fetchCryptoList().then(({data}: {data:Array<CurrenciesResponse>}) =>{
      setCoinList(data);
    });
  }, []);

  const fetchCryptoList = async () => {
    return await axios.get(url)
  }

  const getCurrencies = async () => {
    const data = await fetch("https://api.coinlore.net/api/tickers/");
    return await data.json();
  };
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
