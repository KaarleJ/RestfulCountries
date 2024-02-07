import { Country } from "../types";
import CountryCard from "./CountryCard";

const CountryTable = ({ countries }: { countries: Country[] }) => {
  if (countries.length === 0) {
    return <h1 className="text-3xl text-center mt-5 text-yellow-800">No countries found</h1>;
  }
  return countries.map((country) => (
    <CountryCard
      key={country.code}
      name={country.name}
      flag={country.flag}
      code={country.code}
    />
  ));
};

export default CountryTable;
