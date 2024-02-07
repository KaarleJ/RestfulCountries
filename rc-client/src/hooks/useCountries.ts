import { useState, useEffect } from "react";
// import axios from "axios";
import { getCountries } from "../services/countries";
import { Country } from "../types";

const useCountries = (search: string | null) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await getCountries(search);
        setCountries(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries", error);
        alert("Error fetching countries");
        setLoading(false);
      }
    };

    fetchCountries();
  }, [search]);

  return { countries, loading };
};

export default useCountries;
