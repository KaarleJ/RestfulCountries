import useCountries from "../hooks/useCountries";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import CountryTable from "../components/CountryTable";

const Root = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search")
  const { countries, loading } = useCountries(search);

  return (
    <div className="relative flex  flex-col justify-center items-center h-5/6 p-10 mt-5">
      <SearchBar className="absolute top-2 right-5" setParams={setSearchParams}/>
      {loading ? (
        <Loader size="48" />
      ) : (
        <CountryTable countries={countries} />
      )}
    </div>
  );
};

export default Root;
