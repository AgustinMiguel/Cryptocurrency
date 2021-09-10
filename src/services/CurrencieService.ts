import customAxios from "../customAxios"
let url = "ticker/?id=";
export const getCurrency = async (id: number) => {
    url = url + id;
    return await customAxios.get(url)
  }