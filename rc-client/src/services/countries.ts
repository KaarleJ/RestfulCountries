import { Country } from "../types";
import axios from "axios";

const apiUrl = "http://localhost:8080/api/countries";

export const getCountries = async (search: string | null) => {
  if (search) {
    const res = await axios.get<Country[]>(`${apiUrl}/search?name=${search}`);
    return res.data;
  } else {
    const res = await axios.get<Country[]>(apiUrl);
    return res.data;
  }
};

export const getCountry = async (name: string) => {
  const res = await axios.get<Country>(`${apiUrl}/name/${name}`);
  return res.data;
};
