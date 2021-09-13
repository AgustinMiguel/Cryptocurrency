import React, { useEffect, useState } from "react";
import * as CurrencieService from "../services/CurrencieService";
import { CryptoCurrency } from "../interfaces/InterfacesList";
import { List, Card } from "antd";

const Coin = ({ match }: { match: any }) => {
  const [coin, setCoin] = useState<Array<CryptoCurrency>>();
  const [loadingList, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    CurrencieService.getCurrency(match.params.id).then(
      ({ data }: { data: Array<CryptoCurrency> }) => {
        setCoin(data);
      }
    ).finally(() => {
      setLoading(false);
    })
  }, []);

  return (
    <React.Fragment>
      <p>Si no trae Data hacer F5</p>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={coin}
        loading= {loadingList}
        renderItem={(item) => (
          <List.Item>
              <Card title={item.name}>
                {item.price_usd} - {item.symbol}
              </Card>
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default Coin;
