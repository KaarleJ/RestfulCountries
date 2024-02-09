import { Country } from "../types";
import axios from "axios";

let apiUrl: string;


if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  apiUrl = 'http://localhost:8080/api/countries'; // replace with your development server URL
} else {
  apiUrl = 'https://restfulcountries.fly.dev/api/countries'; // replace with your production server URL
}

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
