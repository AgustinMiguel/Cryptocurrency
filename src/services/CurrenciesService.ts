import customAxios from "../customAxios"
const url = "tickers/";
export const fetchCryptoList = async () => {
    return await customAxios.get(url)
  }