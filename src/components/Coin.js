import React, { useEffect, useState } from "react";

const Coin = ({ match }) => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    getCurrency().then((response) => {
      setCoin(response[0]);
    });
  }, []);

  const getCurrency = async () => {
    const data = await fetch(
      `https://api.coinlore.net/api/ticker/?id=${match.params.id}`
    );
    return await data.json();
  };

  return (
    <React.Fragment>
      <h1>{coin.name}</h1>
      <p>Precio (USD:) {coin.price_usd}</p>
    </React.Fragment>
  );
};

export default Coin;
