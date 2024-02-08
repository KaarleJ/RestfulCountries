import { Country } from "../types";
import { useState, useEffect } from "react";
import { getCountry } from "../services/countries";

const useCountry = (name: string) => {
  const [country, setCountry] = useState<Country>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountry(name);
        setCountry(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country", error);
        setLoading(false);
      }
    };
    fetchCountries();
  }, [name]);

  return { country, loading };
};

export default useCountry;
