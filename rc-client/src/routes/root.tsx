import useCountries from "../hooks/useCountries";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import CountryTable from "../components/CountryTable";

const Root = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const { countries, loading } = useCountries(search);

  return (
    <div className="relative flex  flex-col justify-start items-center h-5/6 py-10 mt-5">
      <SearchBar
        className="absolute top-2 right-5"
        setParams={setSearchParams}
      />
      {loading ? (
        <div className="flex items-center justify-center h-5/6">
          <Loader size="48" />
        </div>
      ) : (
        <CountryTable countries={countries} />
      )}
    </div>
  );
};

export default Root;
