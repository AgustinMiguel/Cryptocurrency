import customAxios from "../customAxios"
const url = "ticker/?id=";
export const getCurrency = async (id: number) => {
     let urlFinal = url + id;
    return await customAxios.get(urlFinal)
  }