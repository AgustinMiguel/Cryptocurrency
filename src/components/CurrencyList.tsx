import React, { useEffect, useState } from "react";
import * as CurrenciesService from "../services/CurrenciesService";
import { Link } from "react-router-dom";
import { CryptoCurrency } from "../interfaces/InterfacesList";
import { List, Card } from "antd";
const CurrencyList = () => {
  const [coinList, setCoinList] = useState<Array<CryptoCurrency>>();
  const [loadingList, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    CurrenciesService.fetchCryptoList().then(
      ({ data }: { data: { data: Array<CryptoCurrency> } }) => {
        setCoinList(data.data);
      }
    ).finally(() => {
      setLoading(false);
    })
  }, []);

  return (
    <React.Fragment>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={coinList}
        loading= {loadingList}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/list/${item.id}`}>
              <Card title={item.name}>
                {item.price_usd} - {item.symbol}
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default CurrencyList;
